/**
 * Created by mathias on 16/08/17.
 */
const jwt = require('../middleware/jwtMiddleware');
const {RotaDetalheFilme, RotaPerfilUsuario} = require('../../../respostas/principal');

module.exports = function (app) {
    app.get('/filme/:id', jwt, (req, res)=>{
        const id = req.params.id;
        RotaDetalheFilme(id, retorno =>{
            if(retorno.sucesso){
                res.json(retorno.dado);
            } else {
                res.send(`Erro ao listar detalhes do filme: ${retorno.erro}`);
            }
        });
    });

    app.get('/perfil/', jwt, (req, res)=>{
        const id = req.sessao.id;
        console.log(req.sessao);
        RotaPerfilUsuario(id, retorno =>{
            if(retorno.sucesso){
                res.json(retorno.dado);
            } else {
                res.send(`Erro ao listar detalhes do filme: ${retorno.erro}`);
            }
        });
    });
};