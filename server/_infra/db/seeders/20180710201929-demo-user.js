'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      const hash1 = bcrypt.hashSync("hogwarts4lyfe", 10);
      const hash2 = bcrypt.hashSync("password", 10);
      return queryInterface.bulkInsert('Users', [{
          username: 'oMartin',
          email: 'martino22@hogwarts.com',
          hash: hash1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          username: 'dalton',
          email: 'dalton@yahoo.com',
          hash: hash2,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
