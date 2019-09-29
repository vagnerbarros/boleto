const repositorio = require('../repositorio/RepositorioBoleto');
const Exception = require('../exception/Exception');

class ModelBoleto{

    cadastrar(){

        try{
            
            repositorio.salvar();
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