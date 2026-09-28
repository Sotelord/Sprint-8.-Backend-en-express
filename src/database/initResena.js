import { Resena } from "../models/Resena.js";

const initialResenas = [
  {
    resena:
      "¡Una experiencia increíble! La ruta por el centro histórico fue espectacular y el apoyo de la gente en las calles te da mucha energía. Los puntos de hidratación estaban muy bien ubicados.",
    calificacion: 5,
    usuarioId: 1,
    carreraId: 1,
  },
  {
    resena:
      "Buena organización en general, pero la entrega de kits fue un poco lenta. El recorrido es plano y rápido, perfecto para buscar una mejor marca personal.",
    calificacion: 4,
    usuarioId: 1,
    carreraId: 2,
  },
  {
    resena:
      "El paisaje de la montaña es insuperable, pero faltó señalización en el kilómetro 7. Casi me pierdo junto con otros corredores. Espero que mejoren eso para el próximo año.",
    calificacion: 3.5,
    usuarioId: 2,
    carreraId: 3,
  },
  {
    resena:
      "Mi primera carrera de 5K y me encantó el ambiente familiar. Muy inclusiva y con medallas muy bonitas para todos los participantes. ¡Altamente recomendada!",
    calificacion: 4.8,
    usuarioId: 3,
    carreraId: 4,
  },
  {
    resena:
      "Demasiada gente para una ruta tan estrecha en los primeros kilómetros. Fue difícil mantener el ritmo al principio, aunque la llegada en el estadio fue emocionante.",
    calificacion: 3,
    usuarioId: 2,
    carreraId: 5,
  },
  // ---------- Reseñas nuevas ----------
  {
    resena:
      "Ideal para salir en familia. La ruta tenía música en casi todos los kilómetros y el ambiente fue muy alegre. Solo le faltó un poco más de sombra en la zona de llegada.",
    calificacion: 4.5,
    usuarioId: 1,
    carreraId: 1,
  },
  {
    resena:
      "La carrera más dura que he corrido. Las subidas después del kilómetro 30 son brutales, pero la organización estuvo a la altura con buenos puestos de abastecimiento y asistencia médica.",
    calificacion: 4.7,
    usuarioId: 1,
    carreraId: 2,
  },
  {
    resena:
      "Correr dentro del campus fue muy diferente y bonito. Eso sí, el recorrido quedó un poco corto para el precio de la inscripción. Buen plan para compartir con compañeros.",
    calificacion: 3.8,
    usuarioId: 1,
    carreraId: 3,
  },
  {
    resena:
      "Logré mi mejor marca en 10K gracias a lo plano del recorrido. El cronometraje fue exacto y los resultados salieron el mismo día. Sin duda vuelvo el próximo año.",
    calificacion: 5,
    usuarioId: 2,
    carreraId: 4,
  },
  {
    resena:
      "Muy buena para empezar, pero la salida fue un poco desordenada porque no había bloques por ritmo. Los voluntarios fueron muy amables durante todo el recorrido.",
    calificacion: 3.9,
    usuarioId: 2,
    carreraId: 5,
  },
  {
    resena:
      "Se nota el esfuerzo de la universidad por promover el deporte. El kit incluía camiseta de buena calidad y hubo actividades de estiramiento antes de la salida.",
    calificacion: 4.2,
    usuarioId: 2,
    carreraId: 1,
  },
  {
    resena:
      "Buena carrera, aunque hubo un trancón en el primer punto de hidratación y perdí varios segundos. Fuera de eso, ruta rápida y bien cerrada al tráfico.",
    calificacion: 4,
    usuarioId: 3,
    carreraId: 1,
  },
  {
    resena:
      "Mi primera media maratón y no pudo ser mejor. El público en las calles no dejó de animar ni un momento. La medalla de finalista es preciosa.",
    calificacion: 4.9,
    usuarioId: 3,
    carreraId: 2,
  },
  {
    resena:
      "Me inscribí sin estar del todo preparado y lo pagué caro. La carrera está muy bien organizada, pero hay que advertir mejor sobre la dificultad del terreno.",
    calificacion: 3.2,
    usuarioId: 3,
    carreraId: 2,
  },
  {
    resena:
      "Corta, sencilla y divertida. Perfecta para quienes estamos empezando. Me hubiera gustado que la entrega de kits no fuera solo en horario de oficina.",
    calificacion: 4.1,
    usuarioId: 3,
    carreraId: 3,
  },
];

export async function loadInitialResenas() {
  try {
    const count = await Resena.count();
    if (count === 0) {
      await Resena.bulkCreate(initialResenas, { validate: true });
      console.log("Initial resenas loaded");
    } else {
      console.log("Ya hay reseñas en la base de datos");
    }
  } catch (error) {
    console.log("Error cargando las reseñas:", error);
  }
}
