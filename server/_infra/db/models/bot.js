'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bot = sequelize.define('Bot', {
    name: DataTypes.STRING,
    discordToken: DataTypes.STRING,
    commandPrefix: DataTypes.STRING,
    status: { type: DataTypes.STRING, defaultValue: 'OFFLINE', allowNull: false }
    }, {
        comment: "Users' Discord Bot instances that have a list of commands that can be invoked in a Discord guild",
        setterMethods: {
            // Use to prevent user overwriting RO values like 'status'
            writableFields(params){
                if (params.name) this.setDataValue('name', params.name);
                if (params.name) this.setDataValue('discordToken', params.discordToken);
                if (params.name) this.setDataValue('commandPrefix', params.commandPrefix);
            }
        }
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
