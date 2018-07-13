'use strict';
module.exports = (sequelize, DataTypes) => {
  var Command = sequelize.define('Command', {
    name: DataTypes.STRING
  }, {
      comment: "Commands of Bots that can be invoked on Discord guilds by members of that guild"
  });
  Command.associate = function(models) {
      models.Command.belongsTo(models.Bot, {
          onDelete: "CASCADE",
          foreignKey: {
              allowNull: true
          }
      });
      models.Command.hasMany(models.Action, {as: 'Actions'});
  };
  return Command;
};
