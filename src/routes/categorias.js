const express = require('express');
const {getAllCategorias, setCategoria} = require('../controllers/categoriasController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({data: getAllCategorias()});
});

router.post("/", async function(req, res){
    res.status(200).json({"resposta" : await setCategoria(req.body.name, req.body.description ) });
})

module.exports = router;