const modelUsuario = require('../model/ModelUsuario');

class ControllerUsuario{

    login(request, response){

        let usuario = request.body;

        modelUsuario.login(usuario.login, usuario.senha)
        .then(result => {
            response.status(200).send(result);
        })
        .catch(erro => {
            response.status(erro.codigo, erro);
        });
    }

    cadastrar(request, response){

        let usuario = request.body;

        modelUsuario.cadastrar(usuario)
        .then(result => {
            response.status(200).send(result);
        })
        .catch(erro => {
            response.status(erro.codigo, erro);
        })
    }
}

let controllerUsuario = new ControllerUsuario();

module.exports = controllerUsuario;