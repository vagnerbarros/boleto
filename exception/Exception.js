class Exception extends Error{

    constructor(codigo, motivo){
        super();
        this.codigo = codigo;
        this.motivo = motivo;
    }
}

module.exports = Exception;