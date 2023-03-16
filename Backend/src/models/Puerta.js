import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Puerta = sequelize.define('puertas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
},{
    timestamps: false
});