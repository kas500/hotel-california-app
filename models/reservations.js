const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Reservations extends Model { }

Reservations.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        guest_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'guest',
                key: 'id'
            }

        },

        checkIn_date: {
            type: DataTypes.DATEONLY,
            allowNull:false,
        },

        checkOut_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        rooms_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'rooms',
                key: 'id'
            },

        },
        checked_In: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        }




    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reservations',
    }
);

module.exports = Reservations;
