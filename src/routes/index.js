const express = require('express');
const IndexController = require('../controllers/index');

function setRoutes(app) {
    const indexController = new IndexController();

    app.get('/', indexController.getIndex.bind(indexController));
    app.get('/admin', (req, res) => {
        res.send('Welcome to the admin page!');
    });
}

module.exports = setRoutes;