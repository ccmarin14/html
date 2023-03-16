import { Router } from "express";
import { 
    getGallineros,
    getGallinero,
    createGallinero,
    deleteGallinero,
    updateGallinero
} from "../controllers/gallinero.controller.js";

const router = Router();

router.get('/gallinero', getGallineros);
router.get('/gallinero/:id', getGallinero);
router.post('/gallinero', createGallinero);
router.put('/gallinero/:id', updateGallinero);
router.delete('/gallinero/:id', deleteGallinero);

export default router;