// archivo encargado de llamar y usar todos los demas archivos .js
import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import {connectDB} from './db.js';
connectDB();
app.listen(3000);
console.log('Server on port:', 3000);