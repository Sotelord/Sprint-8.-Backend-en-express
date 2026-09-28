import app from "./app.js";
import { sequelize } from "./database/database.js";
import { loadInitialResenas } from "./database/initResena.js";
import { loadInitialCarreras } from "./database/initCarreras.js";
import { loadInitialUsuarios } from "./database/initUsuarios.js";
import { setupRelations } from "./models/relations.js";
import { loadInitialFollowers } from "./database/initFollowers.js";
import { loadInitialInscripciones } from "./database/initInscripciones.js";
import "./models/Carrera.js";
import "./models/Resena.js";
import "./models/Usuario.js";
import "./models/Follower.js";
import "./models/Inscripcion.js";

async function init() {
  try {
    await sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });

    setupRelations();

    await sequelize.sync({ force: true });

    await loadInitialCarreras();
    await loadInitialUsuarios();
    await loadInitialResenas();
    await loadInitialFollowers();
    await loadInitialInscripciones();

    app.listen(3000, () => {
      console.log("Server on port 3000");
    });
  } catch (error) {
    console.error(error);
  }
}

init();
