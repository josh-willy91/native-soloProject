'use strict';
module.exports = (sequelize, DataTypes) => {
  const venue = sequelize.define('venue', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    lat: {
      type: DataTypes.DECIMAL(6, 4),
      defaultValue: null,
    },
    lon: {
      type: DataTypes.DECIMAL(7, 4),
      defaultValue: null,
    },
  }, {});
  venue.associate = function(models) {
    // associations can be defined here

    Venue.hasMany(models.Event, {foreignKey: 'venueId'})
  };
  return venue;
};
