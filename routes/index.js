const route = require('express').Router();

const InicioController = require('../controllers/InicioController');


route.get('/', InicioController.inicio);

route.get('/new/question', function(req, res) {
    res.render('new_question')
});

route.get('/category/:category', function(req, res) {
    res.render('index', {
        categoria: req.params.category.toUpperCase(),
        cat: true
    })
});


module.exports = route;