const modelBoleto = require('../model/ModelBoleto');

class ControllerBoleto{

    cadastrar(request, response){

        let boleto = request.body;

        console.log(boleto);

        modelBoleto.cadastrar(boleto)
        .then(result => {
            response.status(200).send(result);
        })
        .catch(erro => {
            response.status(erro.codigo).send(erro);
        })
    }
}

let controller = new ControllerBoleto();

module.exports = controller;