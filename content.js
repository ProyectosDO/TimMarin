/* ============================================================
   CONTENIDO CENTRAL DE TIM MARÍN
   Edita este archivo para agregar videos, juegos y actividades.
   La página crea las tarjetas automáticamente.
   ============================================================ */

const CATEGORIAS = [
  "La creación",
  "Historias bíblicas",
  "Canciones infantiles cristianas",
  "Aprendamos con Tim Marín"
];

/* VIDEOS — en youtubeId puedes poner el ID o pegar el enlace completo de YouTube.
   Ejemplo (copia el bloque dentro de VIDEOS y cambia los datos):
   {
     titulo: "El primer día de la creación",
     descripcion: "Aprendamos sobre la luz y la oscuridad.",
     youtubeId: "ID_REAL_DEL_VIDEO",
     fecha: "2026-10-11",
     categoria: "La creación"
   },
*/
const VIDEOS = [
  {
    titulo: "La creación de Dios",
    descripcion: "Descubre cómo Dios creó el mundo y todo lo que hay en él.",
    youtubeId: "793H_v6Sn3E",
    fecha: "2026-10-11",
    categoria: "La creación"
  },
  {
    titulo: "El primer día de la creación",
    descripcion: "Aprendamos sobre el primer día de la creación.",
    youtubeId: "h4ad6wJwz_E",
    fecha: "2026-10-11",
    categoria: "La creación"
  },
  {
    titulo: "El segundo día de la creación",
    descripcion: "Aprendamos sobre el segundo día de la creación.",
    youtubeId: "_Q_-Q1iBuOo",
    fecha: "2026-10-11",
    categoria: "La creación"
  },
  {
    titulo: "El tercer día de la creación",
    descripcion: "Aprendamos sobre el tercer día de la creación.",
    youtubeId: "bPCYRxqAUN8",
    fecha: "2026-10-11",
    categoria: "La creación"
  },
  {
    titulo: "El cuarto día de la creación",
    descripcion: "Aprendamos sobre el cuarto día de la creación.",
    youtubeId: "WjPgDS-tQJ4",
    fecha: "2026-10-11",
    categoria: "La creación"
  },
  {
    titulo: "El quinto día de la creación",
    descripcion: "Aprendamos sobre el quinto día de la creación.",
    youtubeId: "Z5-iatFjeR8",
    fecha: "2026-10-11",
    categoria: "La creación"
  },
  {
    titulo: "El sexto día de la creación",
    descripcion: "Aprendamos sobre el sexto día de la creación.",
    youtubeId: "UMVGZmkpaVo",
    fecha: "2026-10-11",
    categoria: "La creación"
  },
  {
    titulo: "El séptimo día de la creación",
    descripcion: "Aprendamos sobre el séptimo día de la creación.",
    youtubeId: "noabbsaEicI",
    fecha: "2026-10-11",
    categoria: "La creación"
  }
];

/* JUEGOS — archivos HTML dentro de assets/games/ */
const JUEGOS = [
  { titulo: "Sopa de letras de la creación", descripcion: "Encuentra las palabras de los siete días de la creación.", emoji: "🔤", archivo: "assets/games/sopa-de-letras.html" },
  { titulo: "¿Qué creó Dios cada día?", descripcion: "Une cada cosa creada con el día en que Dios la hizo.", emoji: "🌍", archivo: "assets/games/que-creo-dios.html" },
  { titulo: "¡Encuentra los animales de Nico!", descripcion: "Acompaña a Nico y encuentra todos los animales escondidos.", emoji: "🐾", archivo: "assets/games/nico-animales.html" }
  // Para agregar otro juego: copia una línea, cambia los datos y sube su archivo a assets/games/
];

/* ACTIVIDADES — archivos dentro de assets/downloads/ ; imagen es opcional */
const ACTIVIDADES = [
  // { titulo: "Colorea los siete días", descripcion: "Hoja para colorear sobre la creación.", imagen: "assets/downloads/colorear.jpg", archivo: "assets/downloads/colorear.pdf" },
];
