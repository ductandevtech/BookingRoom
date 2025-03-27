'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    statusId: DataTypes.STRING,
    roomId: DataTypes.STRING,
    userId: DataTypes.STRING,
    date: DataTypes.DATE,
    timeType: DataTypes.STRING,
    roomName: DataTypes.STRING,
    roomType: DataTypes.STRING,
    roomPrice: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};