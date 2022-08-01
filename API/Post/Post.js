const express = require('express');
const Sequelize = require('sequelize');
const connection = require('../database/database');

const Post = connection.define('post', {
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    urlImage: {
        type: Sequelize.STRING,
        allowNull: true
    },
    coments: {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
            return this.getDataValue('coments').split(';')
        },
        set(val) {
        this.setDataValue('coments',val.join(';'));
        },
    }
})

//Post.sync({force: true});

module.exports = Post;