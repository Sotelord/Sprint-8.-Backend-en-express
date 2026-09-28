import { Usuario } from "../models/Usuario.js";

const initialUsuarios = [
  {
    nombre: "Santiago Rayo",
    usuario: "@santiagorayo",
    email: "santiago.rayo@example.com",
    ubicacion: "Bogotá, Colombia",
    bio: "Runner • Siempre buscando mi próximo reto 🏃",
    fotoPerfil:
      "https://media.istockphoto.com/id/545805760/photo/man-runner-jogger-running-isolated.jpg?s=612x612&w=0&k=20&c=h_yH1K2Ou_b6fjL8At0TY2wV5rhasGFNu4sdFVZW54A=",
    estadisticasGlobales: {
      numCarrera: 12,
      distacia: "186,4 km",
      mejorTiempo10k: "48:32",
      mejorTiempo21k: "1:52:40",
    },
  },
  {
    nombre: "Sara Castro",
    usuario: "@saracastro",
    email: "sara.castro@example.com",
    ubicacion: "Chía, Colombia",
    bio: "Corredora • Kilómetros, música y nuevas metas 🎧🏃‍♀️",
    fotoPerfil:
      "https://images.pexels.com/photos/3763996/pexels-photo-3763996.jpeg?cs=srgb&dl=pexels-olly-3763996.jpg&fm=jpg",
    estadisticasGlobales: {
      numCarrera: 18,
      distacia: "254,7 km",
      mejorTiempo10k: "52:18",
      mejorTiempo21k: "2:01:35",
    },
  },
  {
    nombre: "David Sotelo",
    usuario: "@davidsotelo",
    email: "david.sotelo@example.com",
    ubicacion: "Cajicá, Colombia",
    bio: "Runner • Constancia hoy, kilómetros mañana 🚀🏃",
    fotoPerfil: null,
    estadisticasGlobales: {
      numCarrera: 9,
      distacia: "143,2 km",
      mejorTiempo10k: "46:55",
      mejorTiempo21k: "1:48:20",
    },
  },
  {
    nombre: "Juan Angarita",
    usuario: "@juanangarita",
    email: "juan.angarita@example.com",
    ubicacion: "Bogotá, Colombia",
    bio: "Runner • Disfrutando cada kilómetro y cada nueva ruta 🏃‍♂️🌄",
    fotoPerfil: null,
    estadisticasGlobales: {
      numCarrera: 15,
      distacia: "221,8 km",
      mejorTiempo10k: "49:47",
      mejorTiempo21k: "1:56:12",
    },
  },
];

export async function loadInitialUsuarios() {
  try {
    const count = await Usuario.count();
    if (count === 0) {
      await Usuario.bulkCreate(initialUsuarios);
      console.log("Initial usuarios loades");
    } else {
      console.log("Ya hay usuarios en nuestra base de datos");
    }
  } catch (error) {
    console.log(error);
  }
}
