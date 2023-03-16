import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Sensor = sequelize.define('sensor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
},{
    timestamps: false
});