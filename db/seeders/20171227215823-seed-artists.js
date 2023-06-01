'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Artists', [
      {
        firstName: "Vincent",
        lastName: "Van Gogh",
        nationality: "Netherlands",
        born: 1853,
        died: 1890,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Edward",
        lastName: "Hopper",
        nationality: "United States of America",
        born: 1882,
        died: 1967,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "James Mcneill",
        lastName: "Whistler",
        nationality: "United States of America",
        born: 1834,
        died: 1903,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Diego",
        lastName: "Velazquez",
        nationality: "Spain",
        born: 1599,
        died: 1660,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
