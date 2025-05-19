const express = require('express');
const router = express.Router();

const Trabalhadores = require('../models/Trabalhadores');
router.get('/', async (req, res) => {
    try {
        const trabalhadores = await Trabalhadores.findAll();
        res.status(200).json(trabalhadores);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os trabalhadores' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { nome, funcao } = req.body;
        const newEdit = await Trabalhadores.create({ nome, funcao });
        res.status(200).json({message:'Trabalhador criado com sucesso', newEdit});
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o trabalhador' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const Trabalhador = await Trabalhadores.findByPk(req.params.id);
        if (!Trabalhador) {
            return res.status(404).json({ error: 'Trabalhador não encontrado' });
        }
        res.status(200).json({message:'Trabalhador encontrado com sucesso', trabalhador});
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o trabalhador' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Trabalhadores.destroy({
            where: {
                id_trabalhador: req.params.id
            }
        });
        res.status(200).json({message:'Trabalhador deletado com sucesso'});
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar o trabalhador' });
    }
});

router.put('/:id', async (req, res) => {
    try {   
        const { nome, funcao } = req.body;
        await Trabalhadores.update(
            { nome, funcao },
            { where: { id_trabalhador: req.params.id } }
        );
        res.status(200).json({message:'Trabalhador atualizado com sucesso'});
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o trabalhador' });
    }
});
module.exports = router;
