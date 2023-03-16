import { Router } from "express";
import { 
    getGallinas,
    createGallina,
    deleteGallina,
    updateGallina,
    getGallina,
    getMovimientosGallina
} from "../controllers/gallina.controller.js";

const router = Router();

router.get('/gallina', getGallinas);
router.post('/gallina', createGallina);
router.put('/gallina/:id', updateGallina);
router.delete('/gallina/:id', deleteGallina);

router.get('/gallina/:id', getGallina);

router.get('/gallina/:id/registro_movimientos', getMovimientosGallina);


export default router;