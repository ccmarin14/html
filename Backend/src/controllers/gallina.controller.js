import { Gallina } from '../models/Gallina.js'
import { RegistroMovimiento } from '../models/RegistroMovimiento.js';

export const getGallinas = async (req,res) => {
    try {
        const gallina = await Gallina.findAll();
        res.json(gallina);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createGallina = async (req,res) => {
    const {tag,estado,gallineroId } = req.body;

    const newGallina = await Gallina.create({
        tag,
        estado,
        gallineroId
    });
    res.json(newGallina);
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

export const getMovimientosGallina = async (req,res) => {
    try {
        const {id} = req.params;

        const movimientosRegistro = await RegistroMovimiento.findAll({
            where: { tagId: id }
        });

        if (!movimientosRegistro) {
            return res.status(404).json({message: `Gallina ${id} no ha realizado movimientos`})
        }

        res.json(movimientosRegistro);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}