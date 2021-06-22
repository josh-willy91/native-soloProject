'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Venues', [
        {
        name: 'Beach Volleyabll by Margaritaville',
        address: '715 First Steet N.',
        city: 'Jacksonville Beach',
        state: 'FL',
        zipCode: '32250',
        lat: '30.295124',
        lon: '-81.390159',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      queryInterface.sequelize.query('ALTER SEQUENCE "Venues_id_seq" RESTART WITH 1;');
      return queryInterface.bulkDelete('Venues', null, {});
  }
};
