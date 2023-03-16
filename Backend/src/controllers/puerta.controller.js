import { Puerta } from '../models/Puerta.js'

export const getPuertas = async (req,res) => {
    try {
        const puerta = await Puerta.findAll();
        res.json(puerta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getGallina = async (req,res) => {
    try {
        const {id} = req.params;

        const gallina = await Gallina.findOne({
            where: {
                tag: id
            }
        });

        if (!gallina) {
            return res.status(404).json({message: `Gallina ${id} no existe`})
        }

        res.json(gallina);
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

export const updateGallina = async (req,res) => {
    try {
        const {id} = req.params;
        const {estado,gallineroId} = req.body;

        const gallina = await Gallina.findByPk(id);
        gallina.estado = estado;
        gallina.gallineroId = gallineroId;
        await gallina.save();

        res.json(gallina);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const deleteGallina = async (req,res) => {
    try {
        const {id} = req.params;
        await Gallina.destroy({
            where: {
                tag: id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
