import { Resena } from "../models/Resena.js";
import { Usuario } from "../models/Usuario.js";
import { Carrera } from "../models/Carrera.js";

//Tener la consulta que permite crear un review, dado un id de usuario, id de artículo, y la información de un review
//Cargar el objeto de usuario en el request
export const createResena = async (req, res) => {
  try {
    const { usuarioId, carreraId, resena, calificacion } = req.body;

    if (
      usuarioId == null ||
      carreraId == null ||
      resena == null ||
      calificacion == null
    ) {
      return res.status(400).json({
        error: "usuarioId, carreraId, resena y calificacion son obligatorios",
      });
    }

    if (!Number.isInteger(Number(usuarioId)) || Number(usuarioId) <= 0) {
      return res
        .status(400)
        .json({ error: "usuarioId debe ser un número entero positivo" });
    }

    if (!Number.isInteger(Number(carreraId)) || Number(carreraId) <= 0) {
      return res
        .status(400)
        .json({ error: "carreraId debe ser un número entero positivo" });
    }

    if (typeof resena != "string" || resena.trim() === "") {
      return res
        .status(400)
        .json({ error: "La reseña debe ser un texto no vacío" });
    }

    if (
      Number.isNaN(Number(calificacion)) ||
      calificacion < 1 ||
      calificacion > 5
    ) {
      return res
        .status(400)
        .json({ error: "La calificación debe ser un número entre 1 y 5" });
    }

    if (usuarioId != null && usuarioId != undefined) {
      const usuario = await Usuario.findByPk(usuarioId);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
    }

    if (carreraId != null && carreraId != undefined) {
      const carrera = await Carrera.findByPk(carreraId);
      if (!carrera) {
        return res.status(404).json({ error: "Carrera no encontrado" });
      }
    }

    const newResena = await Resena.create(req.body);
    return res.json(newResena);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Tener la consulta que permite modificar la información de un review dado su id.
export const updateResena = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        error: "El id de la reseña debe ser un número entero positivo",
      });
    }

    const { usuarioId, carreraId, resena, calificacion } = req.body;

    if (usuarioId !== undefined || carreraId !== undefined) {
      return res.status(400).json({
        error: "No se puede cambiar el usuario ni la carrera de una reseña",
      });
    }

    if (resena === undefined && calificacion === undefined) {
      return res.status(400).json({
        error: "Envía al menos resena o calificacion para actualizar",
      });
    }

    if (
      resena !== undefined &&
      (typeof resena !== "string" || resena.trim() === "")
    ) {
      return res
        .status(400)
        .json({ error: "La reseña debe ser un texto no vacío" });
    }

    if (
      calificacion !== undefined &&
      (calificacion === null ||
        Number.isNaN(Number(calificacion)) ||
        calificacion < 1 ||
        calificacion > 5)
    ) {
      return res
        .status(400)
        .json({ error: "La calificación debe ser un número entre 1 y 5" });
    }

    const resenaEncontrada = await Resena.findByPk(id);
    if (!resenaEncontrada) {
      return res.status(404).json({ error: "Reseña no encontrada" });
    }
    await resenaEncontrada.update(req.body);
    return res.json(resenaEncontrada);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Tener la consulta que permite eliminar un review por su id.
export const deleteResena = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        error: "El id de la reseña debe ser un número entero positivo",
      });
    }

    const resena = await Resena.findByPk(id);
    if (!resena) {
      return res.status(404).json({ error: "Reseña no encontrada" });
    }
    await resena.destroy();
    return res.status(204); //delete ok
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Tener la consulta que permite traer todos los review de un artículo, de acuerdo a su id.
export const getReviewsCarreraId = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        error: "El id de la carrera debe ser un número entero positivo",
      });
    }

    const carrera = await Carrera.findByPk(id);
    if (!carrera) {
      return res.status(404).json({ error: "Carrera no encontrada" });
    }
    const reviews = await Resena.findAll({
      where: {
        carreraId: id,
      },
      include: [
        {
          model: Usuario,
          as: "usuario",
          attributes: ["usuario", "fotoPerfil"],
        },
        {
          model: Carrera,
          as: "carrera",
          attributes: ["nombre"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return res.json(reviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Tener una consulta que permita traer todos los revies dado un id de usuario.
export const getReviewsUsuarioId = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res
        .status(400)
        .json({
          error: "El id del usuario debe ser un número entero positivo",
        });
    }

    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const reviews = await Resena.findAll({
      where: {
        usuarioId: id,
      },
      include: [
        {
          model: Carrera,
          as: "carrera",
          attributes: ["nombre"],
        },
        {
          model: Usuario,
          as: "usuario",
          attributes: ["usuario", "fotoPerfil"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return res.json(reviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
