import { Usuario } from "../models/Usuario.js";

//Tener la consulta que me permita buscar un usuario por id.
export const getUsuarioById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        error: "El id del usuario debe ser un número entero positivo",
      });
    }

    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    return res.json(usuario);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
