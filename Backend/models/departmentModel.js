const { DataTypes } = require('sequelize');
const { sicuel }  = require("../config")

const Department = sicuel.define(
    "departamentos",
    {
      iddept: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      coddepartamento: {
        type: DataTypes.CHAR(3),
      },
      nombredepartamento: {
        type: DataTypes.STRING(100),
      },
    },
    {
      timestamps: false,
    }
  );
  
module.exports =  Department;