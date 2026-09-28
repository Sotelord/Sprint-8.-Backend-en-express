import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("pacetride", "postgres", "password", {
  port: 5432,
  host: "localhost",
  dialect: "postgres",
});
