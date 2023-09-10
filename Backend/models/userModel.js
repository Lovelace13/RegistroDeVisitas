const { DataTypes } = require('sequelize');
const { sicuel }  = require("../config")

const Usuario = sicuel.define(
    "usuarios",
    {
      iduser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(100),
      },
      lastname: {
        type: DataTypes.STRING(100),
      },
      rol: {
        type: DataTypes.CHAR(1)
      },
      email: {
        type: DataTypes.STRING(50),
      },
    },
    {
      timestamps: true,
    }
  );
  
module.exports =  Usuario;