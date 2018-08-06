'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Actions', [{
          type: 'msgChannel',
          parameters: ['Hawaiian pizza is an abomination! Pineapples do not belong on pizza, and anyone who says otherwise is a filthy heretic.'],
          CommandId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          type: 'msgDirect',
          parameters: ['I actually don\'t mind pineapples on pizza, but don\'t tell anyone I said that...'],
          CommandId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          type: 'msgDirect',
          parameters: ['I just sent you the time in the channel'],
          CommandId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          type: 'slots',
          parameters: ['3', 'number'],
          CommandId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          type: 'playAudio',
          parameters: ['https://www.youtube.com/watch?v=jfFTT3iz740!'],
          CommandId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Actions', null, {});
  }
};
