/**
 * Created by J on 12/09/2016.
 */
if (typeof jQuery === 'undefined') { throw new Error('Reversi\'s JavaScript requires jQuery') }
if (typeof reversiIa === 'undefined') { throw new Error('Reversi\'s JavaScript requires reversiIa') }

var singlePlayerGame = {

    jogador: reversiIa.jogadorPreto,

	init: function() {
        jQuery('.casa').click(function () {
            var casa = {'linha': jQuery(this).data('x'), 'coluna': jQuery(this).data('y')};
            singlePlayerGame.colocarPeca(casa, singlePlayerGame.jogador);
        });
    },

    colocarPeca: function (casa, jogador) {
        reversiIa.colocarPeca(casa, jogador);
        singlePlayerGame.atualizarTabuleiro();
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

