'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Artworks', [
      {
        title: "Whistler's Mother",
        year: 1871,
        movement: 'Realism',
        medium: 'Oil Paint',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Starry Night',
        year: 1889,
        movement: 'Post Impressionism',
        medium: 'Oil Paint',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Las Meninas',
        year: 1656,
        movement: 'Baroque',
        medium: 'Oil Paint',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Nighthawks',
        year: 1942,
        movement: 'Modernism',
        medium: 'Oil Paint',
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
