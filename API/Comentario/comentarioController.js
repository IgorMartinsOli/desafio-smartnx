const express = require('express');
const router = express.Router();
const Comentario = require('../Comentario/Comentario')

router.get('/', (req, res) => {
    Comentario.findAll()
    .then((comentarios) => {
        return res.status(200).json(comentarios);
    }).catch((err) => {
        return res.status(400).json({ err: err.message });
    })
})

router.post('/new', (req, res) => {
    let description = req.body.description;
    let postId = req.body.idPost;

    Comentario.create({
        description: description,
        postId: postId
    }).then((response) => {
        res.status(200).json({comentario: response})
    }).catch((err) => {
        return res.status(400).json({err: err.message})
    })
})

router.post('/edit', (req, res) => {
    let id = req.body.id;
    let description = req.body.description;

    Comentario.update({
        description: description,
    }, {where: {id: id}
    }).then((response) => {
        return res.status(200).json({comentario: response})
    }).catch((err) => {
        return res.status(400).json({err: err})
    })
})

router.delete('/delete', (req, res) => {
    let id = req.body.id;

    Comentario.destroy({
        where: {id: id}
    }).then((response) => {
        return res.status(200).json({comentario: response})
    }).catch((err) => {
        return res.status(400).json({err: err})
    })
})

module.exports = Comentario;