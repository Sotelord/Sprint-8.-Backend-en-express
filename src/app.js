import express from "express";
import usuariosRoutes from "./routes/usuarios.routes.js";
import carrerasRoutes from "./routes/carreras.routes.js";
import resenasRoutes from "./routes/resenas.routes.js";

const app = express();
app.use(express.json());
app.use(usuariosRoutes);
app.use(carrerasRoutes);
app.use(resenasRoutes);

export default app;
