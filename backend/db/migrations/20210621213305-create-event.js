'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hostId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Users"},
      },
      venueId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Venues"}
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Groups"}
      },
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};
