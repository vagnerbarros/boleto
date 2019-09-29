const repositorio = require('../repositorio/RepositorioUsuario');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const constantes = require("../util/constantes");
const Usuario = require('../schemas/Usuario');
const Exception = require('../exception/Exception');

class ModelUsuario{

    async login(login, senha){

        try {
        
            let usuario = await repositorio.buscarLogin(login);
            if(usuario){
                let senhaCorreta = bcrypt.compareSync(senha, usuario.senha);
                if(senhaCorreta) {
                
                    let token = jwt.sign({ id: usuario._id }, constantes.JWT_SECRET, { expiresIn: constantes.EXPIRACAO_TOKEN });
                    let sucessoLogin = { nome: usuario.nome, sucess: true, token: token };

                    return sucessoLogin;
                } 
                else{
                    throw new Exception(401, 'Login/Senha Incorretos');
                }
            }
            else{
                throw new Exception(401, 'Login/Senha Incorretos');
            }
        } 
        catch (erro) {
            throw erro;
        }
    }

    async cadastrar(usuario) {
        
        try {

            let existeLogin = await repositorio.buscarLogin(usuario.login);
            if (!existeLogin) {

                let senhaHash = bcrypt.hashSync(usuario.senha, 8);
                let novoUsuario = Usuario(usuario);
                novoUsuario.senha = senhaHash;

                return await repositorio.salvar(novoUsuario);
            } else {
                throw new Exception(409, 'Login já existe');
            }
        } 
        catch (erro) {
            throw erro;
        }
    }
}

let usuario = new ModelUsuario();

module.exports = usuario;