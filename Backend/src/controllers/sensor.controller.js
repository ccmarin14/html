import { Sensor } from '../models/Sensor.js'

export const getSensores = async (req,res) => {
    try {
        const sensor = await Sensor.findAll();
        res.json(sensor);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getSensor = async (req,res) => {
    try {
        const {id} = req.params;

        const sensor = await Sensor.findOne({
            where: {
                id: id
            }
        });

        if (!sensor) {
            return res.status(404).json({message: `Sensor ${id} no existe`})
        }

        res.json(sensor);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createSensor = async (req,res) => {
    const {id,gallineroId } = req.body;

    const newSensor = await Sensor.create({
        id,
        gallineroId
    });
    res.json(newSensor);
}

export const updateSensor = async (req,res) => {
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

export const deleteSensor = async (req,res) => {
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
