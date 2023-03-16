import { Router } from "express";
import { 
    getGallinas,
    getGallina,
    createGallina,
    deleteGallina,
    updateGallina
} from "../controllers/gallina.controller.js";

const router = Router();

router.get('/gallina', getGallinas);
router.get('/gallina/:id', getGallina);
router.post('/gallina', createGallina);
router.put('/gallina/:id', updateGallina);
router.delete('/gallina/:id', deleteGallina);

export default router;