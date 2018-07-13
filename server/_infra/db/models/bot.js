'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bot = sequelize.define('Bot', {
    name: DataTypes.STRING,
    discordToken: DataTypes.STRING,
    commandPrefix: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Bot.associate = function(models) {
    models.Bot.belongsTo(models.User, {
        as: "Owner",
        onDelete: "CASCADE",
        foreignKey: {
            allowNull: true
        }
    });
    models.Bot.hasMany(models.Command, {as: 'Commands'});
  };
  return Bot;
};
