import { RegistroMovimiento } from '../models/RegistroMovimiento.js'

export const getRegistrosMovimientos = async (req,res) => {
    try {
        const registroMovimiento = await RegistroMovimiento.findAll();
        res.json(registroMovimiento);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getRegistroMovimiento = async (req,res) => {
    try {
        const {id} = req.params;

        const sensor = await RegistroMovimiento.findOne({
            where: {
                id: id
            }
        });

        if (!sensor) {
            return res.status(404).json({message: `Registro de movimiento ${id} no existe`})
        }

        res.json(sensor);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createRegistroMovimiento = async (req,res) => {
    try {
        const { tagId, sensorId, fecha, dentro } = req.body;

        const newRegistroMovimiento = await RegistroMovimiento.create({
            tagId, 
            sensorId, 
            fecha, 
            dentro
        });
        res.json(newRegistroMovimiento);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    
}

export const updateRegistroMovimiento = async (req,res) => {
    try {
        const {id} = req.params;
        const {gallineroId} = req.body;

        const sensor = await Sensor.findByPk(id);
        sensor.gallineroId = gallineroId;
        await sensor.save();

        res.json(sensor);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const deleteRegistroMovimiento = async (req,res) => {
    try {
        const {id} = req.params;
        await Sensor.destroy({
            where: {
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
