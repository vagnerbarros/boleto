const modelBoleto = require('../model/ModelBoleto');

class ControllerBoleto{

    cadastrar(request, response){

        let boleto = request.body;

        modelBoleto.cadastrar(boleto)
        .then(result => {
            response.status(200).send(result);
        })
        .catch(erro => {
            response.status(erro.codigo).send(erro);
        })
    }

    gerar(request, response){

        modelBoleto.gerar()
        .then(result => {
            response.status(200).send(result);
        }) 
        .catch(erro => {
            response.status(erro.codigo).send(erro);
        });    
    }
}

let controller = new ControllerBoleto();

module.exports = controller;