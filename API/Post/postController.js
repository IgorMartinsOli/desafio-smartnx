const express = require('express');
const router = express.Router();
const Post = require('./Post');
const Comentario = require('../Comentario/Comentario');

router.get('/', (req, res) => {
    Post.findAll()
    .then((posts) => {
        return res.status(200).json(posts)
    }).catch((err) =>{
        return res.status(500).json({msg: err.message})
    })
})

//FIXME: está inserindo porém está retornando 400
router.post('/new', (req, res) => {
    let description = req.body.description;
    let urlImage = req.body.urlImage;
    let comentarios = null;

    Post.create({
        description: description,
        urlImage: urlImage,
        comentarios: comentarios
    }).then(post => {
        console.log(post);
        return res.status(201).json({post: post});
    }).catch((err) => {
        return res.status(400).json({msg: "Error creating post", err: err.message})
    })
})

router.post('/edit', (req, res) => {
    let id = req.body.id;
    let description = req.body.description;
    let urlImage = req.body.urlImage;

    Post.update({
        description: description,
        urlImage: urlImage,},
        {where: {id: id}}
        ).then((post) => {
        return res.status(201).json({post: post})
    }).catch((err) => {
        return res.status(400).json({msg: "Error edit post", err: err.message});
    })
})

router.delete('/delete', (req, res) => {
    let id = req.body.id;

    Post.destroy({
        where: {id: id}
    }).then(() =>{
        return res.status(200).json({msg: 'Post excluido com sucesso'})
    }).catch((err) => {
        return res.status(400).json({msg: 'Error delete post', err: err.message})
    })
})

router.get('post/:id', (req, res) => {
    let id = req.params.id;

    Post.findAll({include:[{model:Comentario, required: true}]})
    .then((data) => {
        return res.status(200).json(data)
    }).catch((err) => {
        return res.status(400).json({msg: 'Error', err: err.message})
    })
})

module.exports = router;