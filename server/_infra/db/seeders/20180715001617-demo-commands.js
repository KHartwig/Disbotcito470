'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Commands', [
      {
          name: 'pizza',
          BotId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'slots',
          BotId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'music',
          BotId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Commands', null, {});
  }
};
