import { Puerta } from '../models/Puerta.js'

export const getPuertas = async (req,res) => {
    try {
        const puerta = await Puerta.findAll();
        res.json(puerta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createPuerta = async (req,res) => {
    const {id,gallineroId } = req.body;

    const newPuerta = await Puerta.create({
        id,
        gallineroId
    });
    res.json(newPuerta);
}
