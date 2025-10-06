const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.cjs");

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
