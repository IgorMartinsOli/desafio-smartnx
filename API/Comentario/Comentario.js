const express = require('express');
const Sequelize = require('sequelize');
const connection = require('../database/database');
const Post = require('../Post/Post');

const Comentario = connection.define('comentarios', {
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }, id
})
Comentario.belongsTo(Post, {
    constraint: true,
})
Post.hasMany(Comentario)
//Comentario.sync({force: true})
module.exports = Comentario;