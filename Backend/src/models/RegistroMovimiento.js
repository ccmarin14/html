import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const RegistroMovimiento = sequelize.define('registros_movimientos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    dentro: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
},{
    timestamps: false
});