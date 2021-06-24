'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Events', [
        {
          hostId: 1,
          venueId: 1,
          categoryId: 1,
          name: 'Sunday Morning Beach Volleyball',
          date: '6/27/2021',
          details: 'These are the details for this event.',
          time: '9:00 AM',
          capacity: '12',
      },
        {
          hostId: 1,
          venueId: 1,
          categoryId: 1,
          name: 'Weds Night Beach Volleyball',
          date: '6/30/2021',
          details: 'These are the details for this event.',
          time: '7:00 PM',
          capacity: '12',
      },
        {
          hostId: 1,
          venueId: 1,
          categoryId: 1,
          name: 'Saturday Morning Beach Volleyball',
          date: '6/26/2021',
          time: '9:00 AM',
          details: 'These are the details for this event.',
          capacity: '12',
      },
        {
          hostId: 4,
          venueId: 2,
          categoryId: 2,
          name: 'Sunday Morning Surf',
          date: '6/27/2021',
          time: '7:00 AM',
          details: 'These are the details for this event.',
          capacity: '6',
      },
        {
          hostId: 4,
          venueId: 2,
          categoryId: 2,
          name: 'Saturday Morning Surf',
          date: '6/26/2021',
          time: '7:00 AM',
          details: 'These are the details for this event.',
          capacity: '6',
      },
    ], {});
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
