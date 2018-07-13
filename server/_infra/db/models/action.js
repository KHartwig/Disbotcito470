'use strict';
module.exports = (sequelize, DataTypes) => {
  var Action = sequelize.define('Action', {
    type: DataTypes.STRING,
    parameters: DataTypes.ARRAY(DataTypes.TEXT)
  }, {});
  Action.associate = function(models) {
      models.Action.belongsTo(models.Command, {
          onDelete: "CASCADE",
          foreignKey: {
              allowNull: false
          }
      });
  };
  return Action;
};
