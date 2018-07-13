'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bot = sequelize.define('Bot', {
    name: DataTypes.STRING,
    discordToken: DataTypes.STRING,
    commandPrefix: DataTypes.STRING,
    status: { type: DataTypes.STRING, defaultValue: 'OFFLINE', allowNull: false }
    }, {
        comment: "Users' Discord Bot instances that have a list of commands that can be invoked in a Discord guild"
    });
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
