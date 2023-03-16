import { Router } from "express";
import { 
    getRegistrosPuerta,
    getRegistroPuerta,
    createRegistroPuerta,
    updateRegistroPuerta,
    deleteRegistroPuerta
} from "../controllers/registroPuerta.controller.js";

const router = Router();

router.get('/registro_puerta', getRegistrosPuerta);
router.get('/registro_puerta/:id', getRegistroPuerta);
router.post('/registro_puerta', createRegistroPuerta);
router.put('/registro_puerta/:id', updateRegistroPuerta);
router.delete('/registro_puerta/:id', deleteRegistroPuerta);

export default router;