'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    hostId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.User, {foreignKey: 'hostId'})
    Event.belongsTo(models.Venue, {foreignKey: 'venueId'})
    Event.belongsTo(models.Group, {foreignKey: 'categoryId'})

    const columnMapping = {
      through: 'Rsvp', // Join Table
      otherKey: 'userId',
      foreignKey: 'eventId'
    };

    Event.belongsToMany(models.User, columnMapping)

  };
  return Event;
};
