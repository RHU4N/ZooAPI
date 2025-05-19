const express = require('express');
const router = express.Router();

const Animais = require('../models/Animais');
router.get('/', async (req, res) => {
    try {
        const animais = await Animais.findAll();
        res.status(200).json(animais);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os animais' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { especie,quantidade,habitate } = req.body;
        const newEdit = await Animais.create({ especie,quantidade,habitate });
        res.status(200).json({message:'Animal criado com sucesso', newEdit});
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o animal' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await Animais.findByPk(id);
        if (!animal) {
            return res.status(404).json({ error: 'Animal não encontrado' });
        }
        res.status(200).json({message:'Animal encontrado com sucesso', animal});
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o animal' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Animais.destroy({
            where: {
                id_animais: req.params.id
            }
        });
        res.status(200).json({message:'Animal deletado com sucesso'});
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar o animal' });
    }
});

router.put('/:id', async (req, res) => {
    try {   
        const {especie,quantidade,habitate} = req.body;
        await Animais.update(
            { especie,quantidade,habitate },
            { where: { id_animais: req.params.id } }
        );
        res.status(200).json({message:'Animal atualizado com sucesso'});
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o animal' });
    }
});
module.exports = router;