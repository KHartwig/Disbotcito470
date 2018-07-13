'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bots', [{
          id:1,
          name: 'BeeBot',
          discordToken: 'kafenwjfnwneiw.q2223rfc.2121dddddffa',
          commandPrefix: '#',
          status: 'OFFLINE',
          OwnerId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:2,
          name: 'GregBakerBot',
          discordToken: 'pfinoeinqfoefqwewqfeq.kcnanence.3212321fwfev',
          commandPrefix: '$',
          status: 'OFFLINE',
          OwnerId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:3,
          name: 'Oppie',
          discordToken: 'o3rororfn4fin44.asdfadw2.3141341dfwe',
          commandPrefix: '#',
          status: 'OFFLINE',
          OwnerId: '2',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:4,
          name: 'Paulio',
          discordToken: 'reapse2fvn33.rtr4rf4gv4g.eadfweqefe',
          commandPrefix: '&',
          status: 'OFFLINE',
          OwnerId: '2',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:5,
          name: 'KawaiiBot',
          discordToken: 'jojogjo4nfkn3b2fn2.dfoajoem23rfon24.22o4or9',
          commandPrefix: '#',
          status: 'OFFLINE',
          OwnerId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bots', null, {});
  }
};
