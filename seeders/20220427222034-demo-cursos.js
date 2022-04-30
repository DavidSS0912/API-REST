'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Cursos',
      [
        {
          nombre: 'Programacion Perl',
          clave: 100,
          creditos: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: 'POO',
          clave: 99,
          creditos: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cursos', {}, {})
  },
}
