const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();
const cors = require('cors');

const index = require("./routes/index");
const categoria = require("./routes/categorias");

app.use("/", cors(), index);
app.use("/categoria", cors(), categoria)

module.exports = app;