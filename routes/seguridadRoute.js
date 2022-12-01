import express from 'express'
const router = express.Router();
import {registrar} from '../controllers/seguridadControllers.js';
import {perfil} from '../controllers/seguridadControllers.js';


router.post("/",registrar);

router.get("/perfil",perfil);
export default router ;