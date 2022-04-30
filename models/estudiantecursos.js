'use strict'
module.exports = (sequelize, DataTypes) => {
  const EstudianteCursos = sequelize.define(
    'EstudianteCursos',
    {
      estudianteId: DataTypes.INTEGER,
      cursoId: DataTypes.INTEGER,
      semestre: DataTypes.STRING,
    },
    {},
  )
  EstudianteCursos.associate = function (models) {
    // associations can be defined here
  }
  return EstudianteCursos
}
