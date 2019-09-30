const express = require('express');
const router = express.Router();

var verificarToken = require('../util/verificarToken');
var controller = require('../controller/controller');

router.post('/boletos', verificarToken, controller.boleto.cadastrar);

router.get('/boletos', verificarToken, controller.boleto.gerar);

module.exports = router;