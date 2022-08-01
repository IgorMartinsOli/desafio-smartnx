const express = require('express');
const Sequelize = require('sequelize');
const connection = require('../database/database');

const Post = connection.define('posts', {
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    urlImage: {
        type: Sequelize.STRING,
        allowNull: true
    },
})

//Post.sync({force: true});

module.exports = Post;