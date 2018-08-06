'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bots', [{
          name: 'AngularBot',
          discordToken: 'NDc1MzYyODkwMjQ1ODY1NDcy.Dkd8PQ.5uY8wTtQSGvRmeNQ-jDDq5aagkc',
          commandPrefix: '$',
          OwnerId: '2',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'ReactBot',
          discordToken: 'NDc1MzY0MTYzMDIwMTI4MjY2.Dkd89w.xpeDs9FpEYglmo5YuQzXKkcd7yw',
          commandPrefix: '$',
          OwnerId: '2',
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bots', null, {});
  }
};
