import { Inscripcion } from "../models/Inscripcion.js";

const initialInscripciones = [
  // ---------- Santiago (1) ----------
  {
    usuarioId: 1,
    carreraId: 1,
    distanciaKm: 10,
    estado: "realizada",
    tiempo: "48:32",
    ritmo: "4:51 /km",
  },
  {
    usuarioId: 1,
    carreraId: 2,
    distanciaKm: 5,
    estado: "realizada",
    tiempo: "24:50",
    ritmo: "4:58 /km",
  },
  {
    usuarioId: 1,
    carreraId: 3,
    distanciaKm: 21,
    estado: "realizada",
    tiempo: "1:52:40",
    ritmo: "5:22 /km",
  },
  {
    usuarioId: 1,
    carreraId: 6,
    distanciaKm: 5,
    estado: "realizada",
    tiempo: "25:20",
    ritmo: "5:04 /km",
  },
  { usuarioId: 1, carreraId: 5, distanciaKm: 10, estado: "inscrito" },
  { usuarioId: 1, carreraId: 7, distanciaKm: 15, estado: "inscrito" },

  // ---------- Sara (2) ----------
  {
    usuarioId: 2,
    carreraId: 1,
    distanciaKm: 10,
    estado: "realizada",
    tiempo: "52:18",
    ritmo: "5:14 /km",
  },
  {
    usuarioId: 2,
    carreraId: 3,
    distanciaKm: 21,
    estado: "realizada",
    tiempo: "2:01:35",
    ritmo: "5:47 /km",
  },
  {
    usuarioId: 2,
    carreraId: 4,
    distanciaKm: 42,
    estado: "realizada",
    tiempo: "4:18:00",
    ritmo: "6:09 /km",
  },
  {
    usuarioId: 2,
    carreraId: 6,
    distanciaKm: 5,
    estado: "realizada",
    tiempo: "26:45",
    ritmo: "5:21 /km",
  },
  { usuarioId: 2, carreraId: 8, distanciaKm: 8, estado: "inscrito" },
  { usuarioId: 2, carreraId: 9, distanciaKm: 21, estado: "inscrito" },

  // ---------- David (3) ----------
  {
    usuarioId: 3,
    carreraId: 1,
    distanciaKm: 10,
    estado: "realizada",
    tiempo: "46:55",
    ritmo: "4:42 /km",
  },
  {
    usuarioId: 3,
    carreraId: 2,
    distanciaKm: 5,
    estado: "realizada",
    tiempo: "23:30",
    ritmo: "4:42 /km",
  },
  {
    usuarioId: 3,
    carreraId: 3,
    distanciaKm: 10,
    estado: "realizada",
    tiempo: "48:10",
    ritmo: "4:49 /km",
  },
  {
    usuarioId: 3,
    carreraId: 4,
    distanciaKm: 42,
    estado: "realizada",
    tiempo: "4:07:00",
    ritmo: "5:53 /km",
  },
  { usuarioId: 3, carreraId: 10, distanciaKm: 3, estado: "inscrito" },
  { usuarioId: 3, carreraId: 5, distanciaKm: 10, estado: "inscrito" },

  // ---------- Juan (4) ----------
  {
    usuarioId: 4,
    carreraId: 3,
    distanciaKm: 21,
    estado: "realizada",
    tiempo: "1:56:12",
    ritmo: "5:32 /km",
  },
  {
    usuarioId: 4,
    carreraId: 2,
    distanciaKm: 5,
    estado: "realizada",
    tiempo: "26:00",
    ritmo: "5:12 /km",
  },
  { usuarioId: 4, carreraId: 9, distanciaKm: 42, estado: "inscrito" },
  { usuarioId: 4, carreraId: 7, distanciaKm: 8, estado: "inscrito" },
];

export async function loadInitialInscripciones() {
  try {
    const count = await Inscripcion.count();
    if (count === 0) {
      await Inscripcion.bulkCreate(initialInscripciones, { validate: true });
      console.log("Initial inscripciones loaded");
    } else {
      console.log("Ya hay inscripciones en la base de datos");
    }
  } catch (error) {
    console.log("Error cargando las inscripciones:", error);
  }
}
