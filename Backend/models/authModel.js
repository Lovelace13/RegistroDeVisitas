const { DataTypes } = require('sequelize');
const { sicuel }  = require("../config")

const InicioSesion = sicuel.define(
    "authusers",
    {
      email: {
        type: DataTypes.STRING(50),
      },
      contraseña: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  );
  
module.exports =  InicioSesion;