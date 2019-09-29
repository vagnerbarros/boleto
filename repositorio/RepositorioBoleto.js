const Boleto = require('../schemas/Boleto');
const Exception = require('../exception/Exception');

class RepositorioBoleto{


    salvar(boleto){

        try{

            return Boleto.save(boleto).exec();
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