'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bots', [{
          name: 'BeeBot',
          discordToken: 'kafenwjfnwneiw.q2223rfc.2121dddddffa',
          commandPrefix: '#',
          OwnerId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'GregBakerBot',
          discordToken: 'pfinoeinqfoefqwewqfeq.kcnanence.3212321fwfev',
          commandPrefix: '$',
          OwnerId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
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
      },
      {
          name: 'KawaiiBot',
          discordToken: 'jojogjo4nfkn3b2fn2.dfoajoem23rfon24.22o4or9',
          commandPrefix: '#',
          OwnerId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bots', null, {});
  }
};
