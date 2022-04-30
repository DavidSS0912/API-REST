'use strict'
module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define(
    'Curso',
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clave: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      creditos: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {},
  )
  Curso.associate = function (models) {
    // associations can be defined here
    Curso.belongsToMany(models.Estudiante, {
      through: models.EstudianteCursos,
    })
  }
  return Curso
}
