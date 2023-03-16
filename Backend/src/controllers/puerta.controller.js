import { Puerta } from '../models/Puerta.js'

export const getPuertas = async (req,res) => {
    try {
        const puerta = await Puerta.findAll();
        res.json(puerta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getPuerta = async (req,res) => {
    try {
        const {id} = req.params;

        const puerta = await Puerta.findOne({
            where: {
                id: id
            }
        });

        if (!puerta) {
            return res.status(404).json({message: `Puerta ${id} no existe`})
        }

        res.json(puerta);
    } catch (error) {
        return res.status(500).json({message: error.message});
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

export const updatePuerta = async (req,res) => {
    try {
        const {id} = req.params;
        const {gallineroId} = req.body;

        const puerta = await Puerta.findByPk(id);
        puerta.gallineroId = gallineroId;
        await puerta.save();

        res.json(puerta);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const deletePuerta = async (req,res) => {
    try {
        const {id} = req.params;
        await Puerta.destroy({
            where: {
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
