'use strict';

module.exports = function(sequelize, DataTypes) {
  var Sale = sequelize.define('Sale', {
    sales_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imei: {
      type: DataTypes.STRING,
      unique: false
    },
    buyer_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    buyer_name: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    buyer_phone_number: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  return Sale;
};