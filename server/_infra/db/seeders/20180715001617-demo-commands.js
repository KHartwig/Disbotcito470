'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Commands', [{
          name: 'help',
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
          name: 'help',
          BotId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'help',
          BotId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'help',
          BotId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'slots',
          BotId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'sleep',
          BotId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'music',
          BotId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Commands', null, {});
  }
};
