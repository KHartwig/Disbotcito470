'use strict';
module.exports = (sequelize, DataTypes) => {
  var Command = sequelize.define('Command', {
    name: DataTypes.STRING
  }, {});
  Command.associate = function(models) {
      models.Command.belongsTo(models.Bot, {
          onDelete: "CASCADE",
          foreignKey: {
              allowNull: false
          }
      });
      models.Command.hasMany(models.Action, {as: 'Actions'});
  };
  return Command;
};
