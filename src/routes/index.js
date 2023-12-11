const express = require('express');
const { setCategoria } = require('../controllers/categoriasController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

module.exports = router;