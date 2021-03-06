/**
 * Created by mathias on 18/09/17.
 */
const {RotaDetalheFilme, RotaPerfilUsuario} = require(__dirname + '/../../../respostas/principal.js');
const {marcador, compararMarks} = require('../../../medicao/index');

module.exports = {

    info_rota: (request, reply) => {
        marcador.mark('INI_FILMEID');
        if(!request.session.logado){
            return reply('Autenticação necessário para acessar essa rota');
        }
        const id = request.params.id;
        RotaDetalheFilme(id, retorno => {
            if (retorno.sucesso) {
                reply(retorno.dado);
                marcador.mark('FIM_FILMEID');
                compararMarks('FILMEID_HAPI_SESSION', 'INI_FILMEID', 'FIM_FILMEID');
            } else {
                reply(`Erro ao listar detalhes do filme: ${retorno.erro}`);
            }
        });
    },

    perfil_rota: (request, reply) => {
        marcador.mark('INI_PERFIL');
        if(!request.session.logado){
            return reply('Autenticação necessário para acessar essa rota');
        }
        const id = request.session.user._id;
        RotaPerfilUsuario(id, retorno => {
            if (retorno.sucesso) {
                reply(retorno.dado);
                marcador.mark('FIM_PERFIL');
                compararMarks('PERFIL_HAPI_SESSION', 'INI_PERFIL', 'FIM_PERFIL');
            } else {
                reply(`Erro ao listar detalhes do filme: ${retorno.erro}`);
            }
        });
    }

};