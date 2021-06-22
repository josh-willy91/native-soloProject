'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Groups', [
        {
        type: 'Beach Volleyball',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      queryInterface.sequelize.query('ALTER SEQUENCE "Groups_id_seq" RESTART WITH 1;');
      return queryInterface.bulkDelete('Groups', null, {});
  }
};
