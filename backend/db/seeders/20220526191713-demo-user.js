'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-User',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUserA',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUserB',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-User', 'FakeUserA', 'FakeUserB'] }
    }, {});
  }
};