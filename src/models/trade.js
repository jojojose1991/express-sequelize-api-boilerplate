'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trade = sequelize.define('Trade', {
    ticker: DataTypes.STRING,
    buyValue: DataTypes.DECIMAL,
    sellValue: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER
  }, {});
  Trade.associate = function(models) {
    // associations can be defined here
  };
  return Trade;
};