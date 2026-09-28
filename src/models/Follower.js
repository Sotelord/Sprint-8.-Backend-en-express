import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Follower = sequelize.define("follower", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  followerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "usuarios",
      key: "id",
    },
  },
  followingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "usuarios",
      key: "id",
    },
  },
});
