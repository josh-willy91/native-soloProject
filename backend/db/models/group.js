'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    type: DataTypes.STRING
  }, {});
  Group.associate = function(models) {
    // associations can be defined here

    Group.hasMany(models.Event, {foreignKey: 'categoryId'})

    const columnMapping = {
      through: 'userGroup',
      otherKey: 'userId',
      foreignKey: 'groupId',
    };

    Group.belongsToMany(models.User, columnMapping)
  };
  return Group;
};
