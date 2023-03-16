import { Router } from "express";
import { 
    getRegistrosMovimientos,
    getRegistroMovimiento,
    createRegistroMovimiento,
    updateRegistroMovimiento,
    deleteRegistroMovimiento
} from "../controllers/registroMovimiento.controller.js";

const router = Router();

router.get('/registro_movimientos', getRegistrosMovimientos);
router.get('/registro_movimientos/:id', getRegistroMovimiento);
router.post('/registro_movimientos', createRegistroMovimiento);
router.put('/registro_movimientos/:id', updateRegistroMovimiento);
router.delete('/registro_movimientos/:id', deleteRegistroMovimiento);

export default router;