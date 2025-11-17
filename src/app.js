import express from 'express'; // para usar import en vez de require, poner "type":"module" en package.json
import morgan from 'morgan'; // HTTP request logger
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
const app = express();
app.use(morgan('dev')); // run dev
app.use(express.json())
app.use(cookieParser())
app.use('/api', authRoutes); // todas las rutas empiezan con api
export default app;