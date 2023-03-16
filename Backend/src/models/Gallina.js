import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Gallina = sequelize.define('gallina', {
    tag: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "dentro"
    },
},{
    timestamps: false
});