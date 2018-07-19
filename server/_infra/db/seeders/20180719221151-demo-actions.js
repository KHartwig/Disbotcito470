'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Actions', [{
          id:1,
          type: 'respondTime',
          parameters: ['userlocation', '+0'],
          CommandId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:2,
          type: 'respondMessage',
          parameters: ['Did you need any help?'],
          CommandId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:3,
          type: 'respondDirect',
          parameters: ['I just sent you the time in the channel'],
          CommandId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Actions', null, {});
  }
};
