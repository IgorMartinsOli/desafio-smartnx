const express = require('express');
const Sequelize = require('sequelize');
const connection = require('../database/database');
const Post = require('../Post/Post');

const Comentario = connection.define('comentario', {
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
})

Comentario.belongsTo(Post, {
    constraint: true,
})

Post.hasMany(Comentario)

//Comentario.sync({force: true})

module.exports = Comentario;