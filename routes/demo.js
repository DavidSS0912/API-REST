let { Router } = require('express')
const router = new Router()
const models = require('../models')

router.get('/demo', async (req, res) => {
  let estudiante = await models.Estudiante.findOne({
    where: {
      matricula: 2000,
    },
  })
  let cursos = await models.Curso.findAll()
  console.log(
    'Datos del estudiante: ',
    estudiante.id,
    estudiante.nombre,
    estudiante.matricula,
    estudiante.semestreIngreso,
  )
  // Asociar todos los cursos al estudiante
  await estudiante.addCursos(cursos, { through: { semestre: '2020-1' } })
  // Desplegar los datos de los cursos asociados al estudiante
  let cursosAsociados = await estudiante.getCursos()
  console.log('Cursos del estudiante con matricula:', estudiante.matricula)
  cursosAsociados.forEach((curso) => {
    console.log(curso.nombre, curso.clave, curso.creditos)
  })
  // Al hacer la asociacion de estudiante con curso se puede acceder
  // el dato del alumno através del curso
  let cursoPOO = await models.Curso.findOne({ where: { nombre: 'POO' } })
  let estudiantesPOO = await cursoPOO.getEstudiantes()
  console.log('Estudiantes de POO:')
  estudiantesPOO.forEach((e) => {
    console.log(e.nombre, e.matricula)
  })
  models.sequelize.close()

  demoAsociacionMuchosAMuchos()
})
