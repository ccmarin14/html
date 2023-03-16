import express from 'express';
import gallineroRoute from './routes/gallinero.routes.js'
import gallinaRoute from './routes/gallina.routes.js'
import puertaRoute from './routes/puerta.routes.js'

const app = express();

//Middlewares
app.use(express.json());

app.use(gallineroRoute);
app.use(gallinaRoute);
app.use(puertaRoute);

export default app;