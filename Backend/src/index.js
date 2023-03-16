import { sequelize } from './database/database.js';
import app from './app.js'

// import './models/Gallinero.js'
// import './models/Gallina.js'
// import './models/Sensor.js'
// import './models/Puerta.js'
// import './models/RegistroPuerta.js'
// import './models/RegistroMovimiento.js'
import './models/Relaciones.js'

async function main() {
    try {
        await sequelize.sync({force: false});
        console.log('Connection has been established successfully.');
        app.listen(3001);
        console.log('Server is listening on port', 3001);
    } catch (error) {
        console.error('Unable to connect to the database', error);
    }

}

main();