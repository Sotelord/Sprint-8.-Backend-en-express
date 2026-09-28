import { Resena } from "./Resena.js";
import { Usuario } from "./Usuario.js";
import { Follower } from "./Follower.js";
import { Carrera } from "./Carrera.js";
import { Inscripcion } from "./Inscripcion.js";

export function setupRelations() {
  //---Un usuario tiene muchas reseñas---

  Usuario.hasMany(Resena, {
    foreignKey: "usuarioId",
    as: "resenasUsuario", // Esto nos permite realizar la consulta de user getResenas()
    onDelete: "cascade",
    hooks: true,
  });

  Resena.belongsTo(Usuario, {
    foreignKey: "usuarioId",
    as: "usuario", // tweet.getUsuario()
  });

  //---Una carrera tiene muchas reseñas---
  Carrera.hasMany(Resena, {
    foreignKey: "carreraId",
    as: "resenasCarrera",
    onDelete: "cascade",
    hooks: true,
  });

  Resena.belongsTo(Carrera, {
    foreignKey: "carreraId",
    as: "carrera",
  });

  //---Un usuario tiene muchos seguidores y un usuario sigue a muchos usuarios

  Usuario.belongsToMany(Usuario, {
    through: Follower,
    as: "following",
    foreignKey: "followerId",
    otherKey: "followingId",
  });

  Usuario.belongsToMany(Usuario, {
    through: Follower,
    as: "followers",
    foreignKey: "followingId",
    otherKey: "followerId",
  });

  //---Un usuario tiene muchas carrreras en su historial/carreras a presentar y una carrera pudo haber sido presentada por muchos usuarios---
  Usuario.belongsToMany(Carrera, {
    through: Inscripcion,
    as: "carrerasInscritas",
    foreignKey: "usuarioId",
    otherKey: "carreraId",
  });

  Carrera.belongsToMany(Usuario, {
    through: Inscripcion,
    as: "corredores",
    foreignKey: "carreraId",
    otherKey: "usuarioId",
  });
  //---Relaciones con la tabla intermedia para ver el tema de estadisticas, una inscripcion pertenece a un usuario y a una carrrera y
  //un usuario y una carrera pueden tener muchas inscripciones---
  Usuario.hasMany(Inscripcion, {
    foreignKey: "usuarioId",
    as: "inscripciones",
    onDelete: "cascade",
    hooks: true,
  });
  Inscripcion.belongsTo(Usuario, {
    foreignKey: "usuarioId",
    as: "usuario",
  });

  Carrera.hasMany(Inscripcion, {
    foreignKey: "carreraId",
    as: "inscripciones",
    onDelete: "cascade",
    hooks: true,
  });
  Inscripcion.belongsTo(Carrera, {
    foreignKey: "carreraId",
    as: "carrera",
  });
}
