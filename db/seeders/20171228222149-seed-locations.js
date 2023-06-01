'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [
      {
        name: "Musee d'Orsay",
        town: "Paris",
        country: 'France',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Museo Del Prado",
        town: "Madrid",
        country: "Spain",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "MoMA",
        town: "New York",
        country: "United States",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Art Institute of Chicago",
        town: "Chicago",
        country: 'United States',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
