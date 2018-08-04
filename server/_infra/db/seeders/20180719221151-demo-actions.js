'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Actions', [{
          id:1,
          type: 'msgChannel',
          parameters: ['Help is for the weak. Come back when you\'ve learned a thing or two.'],
          CommandId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:2,
          type: 'msgDirect',
          parameters: ['I just sent you the time in the channel'],
          CommandId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:3,
          type: 'slots',
          parameters: ['3', 'number'],
          CommandId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:4,
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
