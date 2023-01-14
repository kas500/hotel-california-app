const { Model, DataTypes, DATEONLY } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Rooms extends Model {}

Rooms.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        price: {
            type:DataTypes.STRING,
            allowNull: false,
            
        },
        numOfGuest: {
            type: DataTypes.INTEGER,
            allowNull: false,
            dafaultValue: 2,
            validate: {
                isNumeric: true,
            }
            
        },
        
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull:false,
        }
  
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'rooms',
    }
);

module.exports = Rooms;
