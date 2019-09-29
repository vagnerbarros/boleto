const cadBoleto = require('../../model/ModelBoleto');
const expect = require('chai').expect;
const connect = require('../../util/dbConnect');

before((done) => {

    connect.connectar();

    connect.remover('boleto')
    .then(result => {
        done();
    })
    .catch(err => {

    });
});

after((done) => {
    connect.remover('boleto')
    .then(() => {
        done();
    })
    .catch(erro => {
    })
});

describe('Teste do Model Boleto', () => {
    
    it('Cadastro de Boleto', (done) => {

        done();
    });
});
