/**
 * Created by J on 12/09/2016.
 */
if (typeof jQuery === 'undefined') { throw new Error('Reversi\'s JavaScript requires jQuery') }
if (typeof reversiIa === 'undefined') { throw new Error('Reversi\'s JavaScript requires reversiIa') }

var singlePlayerGame = {

    jogador: reversiIa.jogadorPreto,

    placar: reversiIa.getPlacar(),

	init: function() {
        jQuery('.casa').click(function () {
            var casa = {'linha': jQuery(this).data('x'), 'coluna': jQuery(this).data('y')};
            singlePlayerGame.colocarPeca(casa, singlePlayerGame.jogador);
        });
    },

    colocarPeca: function (casa, jogador) {
        reversiIa.colocarPeca(casa, jogador);
        singlePlayerGame.atualizarTabuleiro();
        if( JSON.stringify(singlePlayerGame.placar) != JSON.stringify(reversiIa.getPlacar()) ) {
            singlePlayerGame.atualizaPlacar();
            singlePlayerGame.mudaJogador();
        }
        if(!reversiIa.movimentosDisponiveis(singlePlayerGame.jogador)) {
            singlePlayerGame.finalizaPartida();
        }
    },

    finalizaPartida:  function () {
        if(singlePlayerGame.placar['preto'] > singlePlayerGame.placar['branco']) {
            swal({
                title: "Fim de jogo",
                text: "O jogador PRETO venceu essa partida!",
                // type: "info"
            });
        }
        if(singlePlayerGame.placar['preto'] < singlePlayerGame.placar['branco']) {
            swal({
                title: "Fim de jogo",
                text: "O jogador BRANCO venceu essa partida!",
                // type: "info"
            });
        }
        if(singlePlayerGame.placar['preto'] == singlePlayerGame.placar['branco']) {
            swal({
                title: "Fim de jogo",
                text: "Empate!",
                // type: "info"
            });
        }
    },
    
    mudaJogador: function () {
        if( singlePlayerGame.jogador == 1 ) {
            singlePlayerGame.jogador = 2;
            jQuery('#player').html('Jogador: BRANCO');
        } else if ( singlePlayerGame.jogador == 2 ) {
            singlePlayerGame.jogador = 1;
            jQuery('#player').html('Jogador: PRETO');
        }
    },

    atualizaPlacar: function () {
        singlePlayerGame.placar = reversiIa.getPlacar();
        jQuery('#player-1 .pontos').text(singlePlayerGame.placar['preto']);
        jQuery('#player-2 .pontos').text(singlePlayerGame.placar['branco']);
    },

    atualizarTabuleiro: function () {
        jQuery.each( reversiIa.tabuleiro, function (nLinha, linha) {
            jQuery.each( linha, function (nColuna, peca) {
                if( peca != 0 ) {
                    jQuery('#' + nLinha + '_' + nColuna + ' .casa').html('<div class="peca peca-' + peca + '"></div>');
                }
            });
        });
    }

}

singlePlayerGame.init();

