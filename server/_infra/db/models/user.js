'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hash: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    models.User.hasMany(models.Bot, {as: 'Bots', foreignKey: 'OwnerId'});
  };
  return User;
};
