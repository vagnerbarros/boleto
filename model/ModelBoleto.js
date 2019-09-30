const repositorio = require('../repositorio/RepositorioBoleto');
const Boleto = require('../schemas/Boleto');
const Exception = require('../exception/Exception');

const ejs = require('ejs');
const path = require('path');

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

    gerar(boleto){

        return new Promise((resolve, reject) => {
            ejs.renderFile(path.join(__dirname, '../templates/boleto.ejs'), {}, (err, result) => {
                if(!err){   
                    // let html = Buffer.from(result).toString('base64');                             
                    // let retorno = {
                    //     impressao: html
                    // }
                    resolve(result);
                }
                else{
                    reject(err);
                }
            });
        });
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