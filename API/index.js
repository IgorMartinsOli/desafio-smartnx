const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Post = require('./Post/Post');
const postController = require('./Post/postController');
const Comentarios = require('./Comentario/Comentario');
const comentarioController = require('./Comentario/ComentarioController');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

connection
    .authenticate()
    .then(() => {
        console.log('Conexão com bd sucess');
    }).catch(err => {
        console.log(err);
})

app.use('/post', postController);
app.use('/comentario', comentarioController);

app.listen(8008, () => {
    console.log('listening on 8008');
});