import { Router } from "express";
import { 
    getPuertas,
    getPuerta,
    createPuerta,
    updatePuerta,
    deletePuerta
} from "../controllers/puerta.controller.js";

const router = Router();

router.get('/puerta', getPuertas);
router.get('/puerta/:id', getPuerta);
router.post('/puerta', createPuerta);
router.put('/puerta/:id', updatePuerta);
router.delete('/puerta/:id', deletePuerta);

export default router;