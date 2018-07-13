'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bots', [{
          name: 'BeeBot',
          discordToken: 'asdofjowjofnewiqn.iqwnfqninq.2121ffa',
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
