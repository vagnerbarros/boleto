const express = require('express');
const router = express.Router();

var controller = require('../controller/controller');

//Login do usuário na api
router.post('/usuarios/login', controller.usuario.login);

router.post('/usuarios', controller.usuario.cadastrar);

module.exports = router;