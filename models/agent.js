'use strict';

module.exports = function(sequelize, DataTypes) {
  var Agent = sequelize.define('Agent', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    agent_sales_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    primary_email: {
      type: DataTypes.STRING,
      unique: true
    },
    phone_number: {
      type: DataTypes.STRING,
      unique: true
    }
  });
  return Agent;
};