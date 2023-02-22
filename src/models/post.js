'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'Posts'
  });

  return Post;
};