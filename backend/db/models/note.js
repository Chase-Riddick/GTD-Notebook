'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    static associate(models) {
      Note.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      Note.belongsTo(models.Folder, {
        foreignKey: "folderId",
        as: "folder",
      });
    }
  };

  Note.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    folderId: {
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
    content: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [0, 1000]
      },
    },
  }, {
    sequelize,
    modelName: 'Note',
    defaultScope: {
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
        ]
      }
    },
  });

  // Note.byUserAndFolder = async function (userId, title) {
  //   return await Note.findAll({
  //     where: {
  //       userId,
  //       include: {
  //         model: Folder,
  //         where: {
  //           title
  //         }
  //       }
  //     },
  //   })
  // };

  Note.byFolder = async function (folderId) {
    return await Note.findAll({
      where: {
        folderId
      },
    });
  };

  Note.getAll = async function () {
    return await Note.findAll();
  };

  // Note.create = async function (details) {
  //   const note = await Note.create(details);
  //   return note;
  // }

  return Note;
};