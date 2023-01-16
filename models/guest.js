const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Guest extends Model {
  checkPassword(loginPw) {
    // return bcrypt.compareSync(loginPw, this.password);
    return loginPw === this.password;
  }
}

Guest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'guest',
  }
);

module.exports = Guest;
