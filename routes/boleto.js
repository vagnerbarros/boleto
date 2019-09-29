const express = require('express');
const router = express.Router();

var verificarToken = require('../util/verificarToken');
var controller = require('../controller/controller');

//Login do usuário na api
router.post('/boleto', verificarToken, controller.boleto.cadastrar);

module.exports = router;