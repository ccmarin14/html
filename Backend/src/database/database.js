import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'gallinerodb',
    'root',
    'wz15h389faz', 
    {
        host: 'localhost',
        dialect: 'mariadb',
    }
);