import express from 'express';
import gallineroRoute from './routes/gallinero.routes.js'
import gallinaRoute from './routes/gallina.routes.js'
import puertaRoute from './routes/puerta.routes.js'
import sensorRoute from './routes/sensor.routes.js'
import registroMovimientoRoute from './routes/registroMovimiento.routes.js'
import registroPuertaRoute from './routes/registroPuerta.routes.js'

const app = express();

//Middlewares
app.use(express.json());

app.use(gallineroRoute);
app.use(gallinaRoute);
app.use(puertaRoute);
app.use(sensorRoute);
app.use(registroMovimientoRoute);
app.use(registroPuertaRoute);

export default app;