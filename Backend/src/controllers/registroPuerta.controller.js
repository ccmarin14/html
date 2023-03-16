import { RegistroPuerta } from '../models/RegistroPuerta.js'

export const getRegistrosPuerta = async (req,res) => {
    try {
        const registroPuerta = await RegistroPuerta.findAll();
        res.json(registroPuerta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getRegistroPuerta = async (req,res) => {
    try {
        const {id} = req.params;

        const registroPuerta = await RegistroPuerta.findOne({
            where: {
                id: id
            }
        });

        if (!registroPuerta) {
            return res.status(404).json({message: `Registro de puerta ${id} no existe`})
        }

        res.json(registroPuerta);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createRegistroPuerta = async (req,res) => {
    try {
        const { puertaId, fecha, evento, tipo } = req.body;

        const newRegistroPuerta = await RegistroPuerta.create({
            puertaId, 
            fecha,
            evento,
            tipo,
        });
        res.json(newRegistroPuerta);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    
}

export const updateRegistroPuerta = async (req,res) => {
    try {
        const {id} = req.params;
        const {puertaId, fecha, evento, tipo} = req.body;

        const registroPuerta = await RegistroPuerta.findByPk(id);
        registroPuerta.puertaId = puertaId;
        registroPuerta.fecha = fecha;
        registroPuerta.evento = evento;
        registroPuerta.tipo = tipo;
        await registroPuerta.save();

        res.json(registroPuerta);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const deleteRegistroPuerta = async (req,res) => {
    try {
        const {id} = req.params;
        await RegistroPuerta.destroy({
            where: {
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
