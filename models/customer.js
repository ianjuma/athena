'use strict';

module.exports = function(sequelize, DataTypes) {
  var CustomerSale = sequelize.define('CustomerSale', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      unique: false
    },
    sales_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imei_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  return CustomerSale;
};
