import Express from 'express';
import Routers from './routes';
const app = Express();

app.use(Routers);

module.exports = app;