'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Estudiantes',
      [
        {
          nombre: 'John Doe',
          matricula: 1000,
          semestreIngreso: '2016-2',
          creditosCursados: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: 'Jane Doe',
          matricula: 2000,
          semestreIngreso: '2018-2',
          creditosCursados: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Estudiantes', {}, {})
  },
}
