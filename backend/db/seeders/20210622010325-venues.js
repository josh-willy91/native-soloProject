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
      },
        {
          name: 'Surf the Poles',
          address: '500 Wonderwood Dr',
          city: 'Jacksonville',
          state: 'FL',
          zipCode: '32233',
          lat: '30.367144',
          lon: '-81.405453',
        },
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
