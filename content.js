const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const vacio = t => `<p class="vacio">${t}</p>`;

// Acepta el ID o un enlace completo de YouTube (watch, youtu.be, shorts, embed)
function idYoutube(x) {
  const m = String(x || "").match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : String(x || "").trim();
}

// ---- Ventana emergente (videos y juegos dentro de la página)
function abrir(html, juego) {
  $("#visor").innerHTML = html;
  $(".box").classList.toggle("juego", !!juego);
  $("#modal").hidden = false;
}
function cerrar() { $("#modal").hidden = true; $("#visor").innerHTML = ""; }
$("#cerrar").onclick = cerrar;
$("#modal").onclick = e => { if (e.target.id === "modal") cerrar(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });

// ---- Juegos
$("#lista-juegos").innerHTML = JUEGOS.length ? JUEGOS.map((j, i) => `
  <article class="card"><div class="img">${esc(j.emoji || "🎮")}</div>
  <div class="cuerpo"><h3>${esc(j.titulo)}</h3><p>${esc(j.descripcion)}</p>
  <button class="btn b1" data-j="${i}">¡Jugar!</button></div></article>`).join("")
  : vacio("¡Muy pronto habrá juegos nuevos! 🎈");
document.querySelectorAll("[data-j]").forEach(b => b.onclick = () =>
  abrir(`<iframe src="${esc(JUEGOS[b.dataset.j].archivo)}" title="${esc(JUEGOS[b.dataset.j].titulo)}"></iframe>`, true));

// ---- Videos
const videos = VIDEOS.map(v => ({ ...v, id: idYoutube(v.youtubeId) }))
  .filter(v => v.id).sort((a, b) => fechaNum(b.fecha) - fechaNum(a.fecha));
// Convierte "2026-10-8" o "2026-10-08" en un número comparable (más alto = más reciente)
function fechaNum(f) {
  const [y, m, d] = String(f || "").split("-").map(Number);
  return new Date(y || 0, (m || 1) - 1, d || 1).getTime() || 0;
}
let filtro = "Todos";
const tarjetaVideo = v => `
  <article class="card video" data-v="${esc(v.id)}" tabindex="0">
    <div class="img"><img loading="lazy" src="https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg" alt="Miniatura: ${esc(v.titulo)}" onerror="this.remove()"><span class="play">▶</span></div>
    <div class="cuerpo"><span class="etq">${esc(v.categoria)}</span><h3>${esc(v.titulo)}</h3><p>${esc(v.descripcion)}</p></div>
  </article>`;
function pintarVideos() {
  if (!videos.length) {
    $("#destacado").innerHTML = "";
    $("#filtros").innerHTML = "";
    $("#lista-videos").innerHTML = vacio("¡Pronto verás aquí los videos de Tim Marín! 🎬");
    return;
  }
  $("#destacado").innerHTML = `<div class="destacado"><h3>⭐ Lo más nuevo</h3>${tarjetaVideo(videos[0])}</div>`;
  const cats = ["Todos", ...new Set([...CATEGORIAS, ...videos.map(v => v.categoria)].filter(c => videos.some(v => v.categoria === c)))];
  $("#filtros").innerHTML = cats.map(c => `<button class="${c === filtro ? "on" : ""}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  const lista = videos.filter(v => filtro === "Todos" || v.categoria === filtro);
  $("#lista-videos").innerHTML = lista.map(tarjetaVideo).join("");
  document.querySelectorAll("[data-c]").forEach(b => b.onclick = () => { filtro = b.dataset.c; pintarVideos(); reveal(); });
  document.querySelectorAll("[data-v]").forEach(c => {
    const play = () => abrir(`<iframe src="https://www.youtube-nocookie.com/embed/${c.dataset.v}?autoplay=1&rel=0" title="Video de Tim Marín" allow="autoplay; encrypted-media; picture-in-picture; fullscreen; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
    c.onclick = play; c.onkeydown = e => { if (e.key === "Enter") play(); };
  });
}
pintarVideos();

// ---- Actividades
$("#lista-actividades").innerHTML = ACTIVIDADES.length ? ACTIVIDADES.map(a => `
  <article class="card"><div class="img">${a.imagen ? `<img loading="lazy" src="${esc(a.imagen)}" alt="${esc(a.titulo)}">` : "🖍️"}</div>
  <div class="cuerpo"><h3>${esc(a.titulo)}</h3><p>${esc(a.descripcion)}</p>
  <a class="btn b3" href="${esc(a.archivo)}" download>⬇️ Descargar</a></div></article>`).join("")
  : vacio("¡Estamos preparando hojas para colorear y fichas divertidas! ✏️");

// ---- Animaciones al hacer scroll
const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("vis"); io.unobserve(e.target); }
}), { threshold: .12 }) : null;
function reveal() {
  document.querySelectorAll(".card:not(.vis)").forEach((c, i) => {
    c.style.setProperty("--d", (i % 4) * 0.1 + "s");
    io ? io.observe(c) : c.classList.add("vis");
  });
  document.querySelectorAll("main section:not(.vis)").forEach(s => io ? io.observe(s) : s.classList.add("vis"));
}
reveal();
addEventListener("scroll", () => $(".nav").classList.toggle("mini", scrollY > 40), { passive: true });

// ---- Botones de suscripción
if (typeof CANAL_YOUTUBE === "string" && CANAL_YOUTUBE.trim()) {
  const u = CANAL_YOUTUBE.trim() + (CANAL_YOUTUBE.includes("?") ? "&" : "?") + "sub_confirmation=1";
  document.querySelectorAll("[data-sub]").forEach(a => { a.href = u; a.hidden = false; });
}
