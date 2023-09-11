const { DataTypes } = require('sequelize');
const { sicuel }  = require("../config")

const Visita = sicuel.define(
    "visitantes",
    {
      idvisita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fechaingreso: {
        type: DataTypes.DATEONLY,
      },
      hora: {
        type: DataTypes.TIME
      },
      nombre: {
        type: DataTypes.STRING(250),
      },
      cedula: {
        type: DataTypes.STRING(10),
      },
      motivo: {
        type: DataTypes.TEXT,
      },
      departamento: {
        type: DataTypes.STRING(100)
      },
      estado: {
        type: DataTypes.BOOLEAN,
      },
      novedad: {
        type: DataTypes.TEXT,
      }
    },
    {
      timestamps: true,
    }
  );
  
module.exports =  Visita;