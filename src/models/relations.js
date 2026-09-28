import { Resena } from "./Resena.js";
import { Usuario } from "./Usuario.js";

export function setupRelations() {
  Usuario.hasMany(Resena, {
    foreignKey: "usuarioId",
    as: "resenas", // Esto nos permite realizar la consulta de user getResenas()
    onDelete: "cascade",
    hooks: true,
  });

  Resena.belongsTo(Usuario, {
    foreignKey: "usuarioId",
    as: "user", // tweet.getUsuario()
  });
}
