import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Gallinero = sequelize.define('gallinero', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    timestamps: false
});