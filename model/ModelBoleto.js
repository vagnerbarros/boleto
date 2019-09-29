const repositorio = require('../repositorio/RepositorioBoleto');
const Boleto = require('../schemas/Boleto');
const Exception = require('../exception/Exception');

class ModelBoleto{

    cadastrar(boleto){

        try{
            
            let novoBoleto = Boleto(boleto);
            return repositorio.salvar(novoBoleto);
        }
        catch(erro){
            throw erro;
        }
    }

    listar(){

    }

    remover(){

    }

    atualizar(){

    }
}

let model = new ModelBoleto();

module.exports = model;