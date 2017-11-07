/**
 * Created by mathias on 22/07/17.
 */
module.exports = {
    http_porta: 3000,
    https_porta: 443,
    mongodb :{
        servidor: 'localhost',
        senha: '',
        usuario: '',
        db: 'tcc_mathias',
        porta: 27017,
    },
    jwt:{
        key:'tcc_mathias_chave_jwt'
    },
    session:{
        key:'tcc_mathias_chave_session'
    },
    bcrypt: {
        saltRounds: 10,
    }
};