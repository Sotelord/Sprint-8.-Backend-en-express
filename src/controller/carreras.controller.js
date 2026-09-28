import { Carrera } from "../models/Carrera.js";

//Tener la consulta que traiga todos los artículos.
export const getCarreras = async (req, res) => {
  try {
    const carreras = await Carrera.findAll({ order: [["fecha", "ASC"]] });
    return res.json(carreras);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Tener la consulta que permite traer el detalle de un Artículo por id de artículo.
export const getCarreraById = async (req, res) => {
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
    return res.json(carrera);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
