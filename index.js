import express from "express";
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import seguridadRoute from './routes/seguridadRoute.js'

const app = express();

app.use(express.json());

dotenv.config();
conectarDB(); 

app.use("/api/seguridad",seguridadRoute)

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=> {
    console.log(`servidor funcionando en el puerto ${PORT}`)
});