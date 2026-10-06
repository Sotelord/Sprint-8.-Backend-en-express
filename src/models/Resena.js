import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Resena = sequelize.define(
  "resenas",
  {
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
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    resena: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    calificacion: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    categoriasDestacadas: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
  },
);
