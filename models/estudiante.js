'use strict'

module.exports = (sequelize, DataTypes) => {
  const Estudiante = sequelize.define(
    'Estudiante',
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      matricula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      semestreIngreso: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      creditosCursados: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {},
  )
  Estudiante.associate = function (models) {
    // associations can be defined here
    Estudiante.belongsToMany(models.Curso, {
      through: models.EstudianteCursos,
    })
  }
  return Estudiante
}
