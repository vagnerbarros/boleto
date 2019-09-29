const mongoose = require('mongoose');
const constantes = require('./constantes');

class Connect{

    connectar(){
        
        try{

            mongoose.connect(constantes.URL_MONGO, constantes.MONGO_OPTIONS);
            mongoose.Promise = global.Promise;
            let db = mongoose.connection;
            db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        }
        catch(erro){
            console.log(erro);
        }
    }

    remover(nome){

        return new Promise((resolve, reject) => {

            try{
                this.db.dropCollection(nome, (err) => {
                    resolve();
                });
            }
            catch(erro){
                reject(erro);
            }
        })
    }
}

let connect = new Connect();

module.exports = connect;
