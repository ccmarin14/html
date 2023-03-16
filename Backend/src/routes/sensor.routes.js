import { Router } from "express";
import { 
    getSensores,
    getSensor,
    createSensor,
    updateSensor,
    deleteSensor
} from "../controllers/sensor.controller.js";

const router = Router();

router.get('/sensor', getSensores);
router.get('/sensor/:id', getSensor);
router.post('/sensor', createSensor);
router.put('/sensor/:id', updateSensor);
router.delete('/sensor/:id', deleteSensor);

export default router;