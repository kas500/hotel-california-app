const { Model, DataTypes, DATEONLY } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comments extends Model { }

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        guest_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'guest',
                key: 'id'
            }

        },

        comment: {
            type: DataTypes.STRING(280),
            allowNull:false,
        }

      


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
    }
);

module.exports = Comments;