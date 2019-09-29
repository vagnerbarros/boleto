let URL_MONGO = '';
let MONGO_OPTIONS = {}
const USER_MONGO = 'git-user';
const PASSWORD_MONGO = 'pjJIoPcI8gk9csny';

if(process.env.NODE_ENV == 'test'){
    URL_MONGO = 'mongodb+srv://' + USER_MONGO + ':' + PASSWORD_MONGO + '@boleto-byao3.mongodb.net/admin';
    MONGO_OPTIONS = {user: USER_MONGO, pass: PASSWORD_MONGO, dbName: 'testes', useNewUrlParser: true};
}
else if(process.env.NODE_ENV == 'develop'){
    
    URL_MONGO = 'mongodb+srv://' + USER_MONGO + ':' + PASSWORD_MONGO + '@boleto-byao3.mongodb.net/admin';
    MONGO_OPTIONS = {user: USER_MONGO, pass: PASSWORD_MONGO, dbName: 'boleto-dev', useNewUrlParser: true};
}
else if(process.env.NODE_ENV == 'production'){
    URL_MONGO = 'mongodb+srv://' + USER_MONGO + ':' + PASSWORD_MONGO + '@boleto-byao3.mongodb.net/admin';
    MONGO_OPTIONS = {user: USER_MONGO, pass: PASSWORD_MONGO, dbName: 'boleto', useNewUrlParser: true};
}

const JWT_SECRET = 'b0l3t0tr1v14l';
const EXPIRACAO_TOKEN = 86400; // EM SEGUNDOS (1 DIA)

module.exports = {
    URL_MONGO,
    MONGO_OPTIONS,
    JWT_SECRET,
    EXPIRACAO_TOKEN
}