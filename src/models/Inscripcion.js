import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Inscripcion = sequelize.define(
  "inscripciones",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "id",
      },
    },
    carreraId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "carreras",
        key: "id",
      },
    },
    distanciaKm: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "inscrito",
      validate: {
        isIn: [["inscrito", "realizada"]],
      },
    },
    tiempo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ritmo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  },
);
