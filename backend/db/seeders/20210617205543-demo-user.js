'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        // firstName: 'demo',
        // lastName: 'lition',
        username: 'Demo-lition',
        email: 'demo@user.com',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        // firstName: 'fake',
        // lastName: 'user2',
        username: 'FakeUser2',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        // firstName: 'fake',
        // lastName: 'user3',
        username: 'FakeUser3',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        // firstName: 'jake',
        // lastName: 'snake',
        username: 'jakeTheSnake',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    queryInterface.sequelize.query('ALTER SEQUENCE "Users_id_seq" RESTART WITH 1;');
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
