import { Gallinero } from '../models/Gallinero.js'

export const getGallineros = async (req,res) => {
    try {
        const gallineros = await Gallinero.findAll();
        res.json(gallineros);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getGallinero = async (req,res) => {
    try {
        const {id} = req.params;

        const gallinero = await Gallinero.findOne({
            where: {
                id
            }
        });

        if (!gallinero) {
            return res.status(404).json({message: `Gallinero ${id} no existe`})
        }

        res.json(gallinero);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createGallinero = async (req,res) => {
    const {id} = req.body;

    try {
        const newGallinero = await Gallinero.create({id});
        res.json(newGallinero);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateGallinero = async (req,res) => {
    try {
        const {id} = req.params;
        const {idnew} = req.body;

        const gallinero = await Gallinero.findByPk(id);
        gallinero.id = idnew;
        await gallinero.save();

        res.json(gallinero);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const deleteGallinero = async (req,res) => {
    try {
        const {id} = req.params;
        await Gallinero.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}