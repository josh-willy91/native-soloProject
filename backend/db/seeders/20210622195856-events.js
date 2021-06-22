'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Events', [
        {
          hostId: 1,
          venueId: 1,
          categoryId: 1,
          name: 'Sunday Morning Beach Volleyball',
          date: '6/27/20201',
          capacity: '12',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      queryInterface.sequelize.query('ALTER SEQUENCE "Events_id_seq" RESTART WITH 1;');
      return queryInterface.bulkDelete('Events', null, {});
  }
};
