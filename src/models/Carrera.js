import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Carrera = sequelize.define(
  "carreras",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    raceImageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    distanciasDisponiblesKm: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
      defaultValue: [5, 10, 21],
    },
    precioBase: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    distanciaReferenciaKm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 21,
    },
    ultimosCupos: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);
