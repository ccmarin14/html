import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const RegistroPuerta = sequelize.define('registros_puerta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    evento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: false
});