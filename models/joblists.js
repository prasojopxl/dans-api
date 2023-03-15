'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joblists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  joblists.init({
    type: DataTypes.STRING,
    url: DataTypes.STRING,
    company: DataTypes.STRING,
    company_url: DataTypes.STRING,
    location: DataTypes.STRING,
    title: DataTypes.STRING,
    title: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'joblists',
  });
  return joblists;
};