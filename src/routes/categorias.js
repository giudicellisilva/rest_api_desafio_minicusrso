const express = require('express');
const {getAllCategorias, setCategoria} = require('../controllers/categoriasController');
const router = express.Router();

router.post('/', async function (req, res) {
    res.status(200).json({"resposta" : await getAllCategorias(req.body.name) });
});

router.post("/new", async function(req, res){
    res.status(200).json({"resposta" : await setCategoria(req.body.userName, req.body.name, req.body.description ) });
})

module.exports = router;