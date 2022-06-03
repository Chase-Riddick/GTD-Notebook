'use strict';
const { Model } = require('sequelize');
const { Note } = require('./note');

module.exports = (sequelize, DataTypes) => {
  class Folder extends Model {
    static associate(models) {
      Folder.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",

      });
      Folder.hasMany(models.Note, {
        foreignKey: "folderId",
        onDelete: 'CASCADE',
        hooks: true,
      });
    }
  };

  Folder.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [0, 80],
      },
    },
  }, {
    sequelize,
    modelName: 'Folder',
    defaultScope: {
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
        ]
      }
    },
  });

  // Folder.foldersByUserId = async function (userId) {
  //   return await Folder.findAll({
  //     where: {
  //       userId,
  //     },
  //     include: [Note],
  //   })
  // };

  return Folder;
};