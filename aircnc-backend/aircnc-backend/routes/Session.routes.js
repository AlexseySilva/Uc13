// index() = listagem de sessões
// show() = listar 1 sessão
// store() = criar 1 sessão
// update() = alterar 1 sessão
// destroy() = excluir 1 sessão
const express = require('express');
const SessionController = require('../controllers/Session.controller');
const router = express.Router();

router.post('/', SessionController.store);

module.exports = router;