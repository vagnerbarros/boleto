const Usuario = require('../schemas/Usuario');
const Exception = require('../exception/Exception');

class RepositorioUsuario {
  
    async salvar(usuario) {

        try {

            let salvo = await usuario.save();
            return salvo;
        } 
        catch (erro) {
            throw new Exception(500, erro.message);
        }
    }

    async atualizar(usuario){

        try{  

            return await Usuario.findOneAndUpdate({_id: usuario._id}, usuario, {new: true}).exec(); 
        }
        catch(err){
            throw new Exception(500, erro.message);
        }
    }

    async buscarLogin(login){

        return await this.buscarUsuario({login: login});
    }

    async buscarId(id){
        
        return await this.buscarUsuario({_id: id});
    }

    async buscarUsuario(query) {
        
        try {
            return await Usuario.findOne(query).exec();
        } 
        catch (erro) {
            throw new Exception(500, erro.message);
        }
    }
}

let usuario = new RepositorioUsuario();

module.exports = usuario;