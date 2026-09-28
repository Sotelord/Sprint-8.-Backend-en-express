import { Carrera } from "../models/Carrera.js";

const initialCarreras = [
  {
    raceImageUrl:
      "https://bogota.gov.co/sites/default/files/2026-04/bogota-se-alista-para-la-carrera-verde-este-domingo-12-de-abril.jpg",
    nombre: "Carrera Atlética Bogotá 10K",
    ubicacion: "Bogotá",
    fecha: "2026-08-15",
    distanciasDisponiblesKm: [10],
    precioBase: 90000,
    distanciaReferenciaKm: 10,
    descripcion:
      "Un recorrido rápido y plano por las principales vías del norte de la ciudad. Ideal para corredores que buscan superar su mejor marca personal en la distancia reina de los 10 kilómetros.",
  },
  {
    raceImageUrl:
      "https://bogota.gov.co/sites/default/files/styles/1050px/public/2025-11/bogota-se-alista-para-vivir-corremitierra%2C-el-evento-del-ano.png",
    nombre: "Corre por Bogotá 5K",
    ubicacion: "Bogotá",
    fecha: "2026-08-30",
    distanciasDisponiblesKm: [5],
    precioBase: 65000,
    distanciaReferenciaKm: 5,
    descripcion:
      "El evento perfecto para iniciarse en el mundo del running o disfrutar con amigos y familia. Una ruta recreativa llena de puntos de entretenimiento, música en vivo y mucha energía positiva.",
  },
  {
    raceImageUrl:
      "https://www.kienyke.com/sites/default/files/styles/interna_contenido_s/public/2022-07/Media%20mARATON.jpg?itok=3wVp3M7D",
    nombre: "Media Maratón Bogotá 2026",
    ubicacion: "Bogotá",
    fecha: "2026-09-27",
    distanciasDisponiblesKm: [5, 10, 21, 42],
    precioBase: 145000,
    distanciaReferenciaKm: 21,
    descripcion:
      "Vive una de las experiencias de running más importantes de Bogotá. Corre, supera tus límites y comparte el recorrido con miles de runners.",
  },
  {
    raceImageUrl: null,
    nombre: "Carrera 0 Bogotá",
    ubicacion: "Bogotá",
    fecha: "2026-08-27",
    distanciasDisponiblesKm: [42],
    precioBase: 100000,
    distanciaReferenciaKm: 42,
    ultimosCupos: true,
    descripcion:
      "Una maratón desafiante diseñada exclusivamente para los atletas más experimentados de la región. El circuito atraviesa zonas de alta exigencia topográfica poniendo a prueba tu resistencia física y mental.",
  },
  {
    raceImageUrl:
      "https://www.runningcolombia.com/wp-content/uploads/2024/09/Maraton-Medellin2024-runners.jpg",
    nombre: "Carrera 10k",
    ubicacion: "Bogotá",
    fecha: "2026-10-31",
    distanciasDisponiblesKm: [10],
    precioBase: 95000,
    distanciaReferenciaKm: 10,
    descripcion:
      "Disfruta de una edición nocturna muy especial. Una ruta iluminada donde todos los participantes visten prendas reflectivas para crear un río de luces a lo largo de los parques principales de la capital.",
  },
  {
    raceImageUrl:
      "https://www.cali.gov.co/info/caligovco_se/media/pubInt/thumbs/thpubInt_700X400_194293.webp",
    nombre: "Carrera Universitaria 5k",
    ubicacion: "Pontificia Universidad Javeriana",
    fecha: "2026-08-22",
    distanciasDisponiblesKm: [5],
    precioBase: 95000,
    distanciaReferenciaKm: 5,
    descripcion:
      "Un evento enfocado en la comunidad estudiantil y académica. El trazado recorre las instalaciones del campus universitario promoviendo la integración, los hábitos de vida saludable y el espíritu deportivo.",
  },

  // ---------- Carreras nuevas ----------
  {
    raceImageUrl: null,
    nombre: "Desafío Cerros Orientales Trail 15K",
    ubicacion: "Bogotá",
    fecha: "2026-11-08",
    distanciasDisponiblesKm: [8, 15],
    precioBase: 110000,
    distanciaReferenciaKm: 15,
    descripcion:
      "Una carrera de montaña por los senderos de los cerros orientales. Subidas exigentes, bosque de niebla y vistas panorámicas de la ciudad para quienes quieren salir del asfalto.",
  },
  {
    raceImageUrl: null,
    nombre: "Carrera Nocturna Chapinero 8K",
    ubicacion: "Bogotá",
    fecha: "2026-11-21",
    distanciasDisponiblesKm: [4, 8],
    precioBase: 70000,
    distanciaReferenciaKm: 8,
    ultimosCupos: true,
    descripcion:
      "Recorre las calles de Chapinero bajo las luces de la ciudad. Una ruta urbana con ambiente de fiesta, puntos de hidratación y música en cada kilómetro.",
  },
  {
    raceImageUrl: null,
    nombre: "Maratón Navideña Bogotá",
    ubicacion: "Bogotá",
    fecha: "2026-12-06",
    distanciasDisponiblesKm: [5, 10, 21, 42],
    precioBase: 150000,
    distanciaReferenciaKm: 42,
    descripcion:
      "Cierra el año corriendo. Una ruta decorada con alumbrados navideños que conecta los principales parques de la ciudad, con distancias para todos los niveles.",
  },
  {
    raceImageUrl: null,
    nombre: "Carrera Recreativa Parque Simón Bolívar 3K",
    ubicacion: "Parque Simón Bolívar",
    fecha: "2026-10-18",
    distanciasDisponiblesKm: [3],
    precioBase: 40000,
    distanciaReferenciaKm: 3,
    descripcion:
      "Una carrera corta y familiar alrededor del lago del parque. Perfecta para niños, principiantes y quienes quieren dar sus primeros pasos en el running.",
  },
];

export async function loadInitialCarreras() {
  try {
    const count = await Carrera.count();
    if (count === 0) {
      await Carrera.bulkCreate(initialCarreras, { validate: true });
      console.log("Initial carreras loaded");
    } else {
      console.log("Ya hay carreras en nuestra base de datos");
    }
  } catch (error) {
    console.log(error);
  }
}
