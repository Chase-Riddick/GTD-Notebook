'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Notes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Users",
          },
        },
      },
      folderId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Folders",
          },
        },
      },
      title: {
        allowNull: false,
        defaultValue: "untitled",
        type: Sequelize.STRING(80),
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING(1000),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Notes');
  }
};