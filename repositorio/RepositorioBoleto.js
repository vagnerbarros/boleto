const Boleto = require('../schemas/Boleto');
const Exception = require('../exception/Exception');

class RepositorioBoleto{


    async salvar(boleto){

        try{

            return await boleto.save(boleto);
        }
        catch(erro){
            throw new Exception(500, erro.message);
        }
    }

    listar(){

    }

    buscar(){

    }

    remover(){

    }

    atualizar(){

    }
}

let repositorio = new RepositorioBoleto();

module.exports = repositorio;