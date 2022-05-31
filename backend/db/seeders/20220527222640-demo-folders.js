'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Folders', [
    {
        userId: '1',
        title: 'In-Basket'
    },
    {
        userId: '1',
        title: 'Organize Notes.'
    },
    {
        userId: '1',
        title: 'Action'
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Folders', {
      id: { [Sequelize.Op.gt]: 0 }
    });
  }
};
