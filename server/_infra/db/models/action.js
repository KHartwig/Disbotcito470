'use strict';
module.exports = (sequelize, DataTypes) => {
  var Action = sequelize.define('Action', {
    type: DataTypes.STRING,
    parameters: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: []}
  }, {
      comment: "Resulting actions when a Command is invoked. These actions tell a Bot instances what to do when a Command is invoked on a Guild."
  });
  Action.associate = function(models) {
      models.Action.belongsTo(models.Command, {
          onDelete: "CASCADE",
          foreignKey: {
              allowNull: true
          }
      });
  };
  return Action;
};
