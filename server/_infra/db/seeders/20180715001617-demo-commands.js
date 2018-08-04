'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Commands', [{
          id:1,
          name: 'help',
          BotId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:2,
          name: 'slots',
          BotId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:3,
          name: 'help',
          BotId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:4,
          name: 'help',
          BotId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:5,
          name: 'help',
          BotId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:6,
          name: 'slots',
          BotId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:7,
          name: 'sleep',
          BotId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:8,
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
