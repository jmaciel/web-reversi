/**
 * Created by J on 26/08/2016.
 */

var reversiIa = {

    /*
     * O : vazia
     * 1 : preta
     * 2 : branca
     */

    // Atributos ------------------------------------------------------------
    'tabuleiro': {
        '1':{'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0},
        '2':{'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0},
        '3':{'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0},
        '4':{'1': 0, '2': 0, '3': 0, '4': 2, '5': 1, '6': 0, '7': 0, '8': 0},
        '5':{'1': 0, '2': 0, '3': 0, '4': 1, '5': 2, '6': 0, '7': 0, '8': 0},
        '6':{'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0},
        '7':{'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0},
        '8':{'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0}
    },

    // Funções ---------------------------------------------------------------

    // TODO: verificar melhor forma de especificar o parametro
    colocarPeca: function (casa, jogador) {
        if(this.verificaPossibilidade(casa, jogador)){
            this.capturar(casa, jogador);
        }
    },

    capturar: function (casa, jogador) {

    },

    /*
     * Verifica se a jogada é possível
     */
    verificaPossibilidade: function (casa, jogador) {
        if(this.verificaCasa(casa) !== 0){
            return false;
        }
        if( this.capturasNorte(casa) == null &&
            this.capturasNordeste(casa) == null &&
            this.capturasLeste(casa) == null &&
            this.capturasSuldeste(casa) == null &&
            this.capturasSul(casa) == null &&
            this.capturasSuldoeste(casa) == null &&
            this.capturasOeste(casa) == null &&
            this.capturasNoroeste(casa) == null
        ) {
            return false;
        }

        return true;
    },

    /*
     * Retorna o que existe na casa, retorna null caso a casa não exista
     */
    verificaCasa: function (casa) {
        if (typeof this.tabuleiro[casa['linha']][casa['coluna']] == 'undefined') {
            return null;
        }
        return this.tabuleiro[casa['linha']][casa['coluna']];
    },

    capturasNorte: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = casa;
        while(pecaLoop != 0) {
            casaLoop['coluna']--;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['coluna'] < 1) {
                return null;
            }

            pecaLoop = this.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push(casaLoop);
            }
            if (pecaLoop == jogador) {
                return capturadas;
            }
        }
        return null;
    },

    capturasSul: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = casa;
        while(pecaLoop != 0) {
            casaLoop['coluna']++;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['coluna'] > 8) {
                return null;
            }

            pecaLoop = this.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push(casaLoop);
            }
            if (pecaLoop == jogador) {
                return capturadas;
            }
        }
        return null;
    },

    capturasOeste: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = casa;
        while(pecaLoop != 0) {
            casaLoop['linha']--;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['linha'] < 1) {
                return null;
            }

            pecaLoop = this.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push(casaLoop);
            }
            if (pecaLoop == jogador) {
                return capturadas;
            }
        }
        return null;
    },

    capturasLeste: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = casa;
        while(pecaLoop != 0) {
            casaLoop['linha']++;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['linha'] > 8) {
                return null;
            }

            pecaLoop = this.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push(casaLoop);
            }
            if (pecaLoop == jogador) {
                return capturadas;
            }
        }
        return null;
    },

    capturasNordeste: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = casa;
        while(pecaLoop != 0) {
            casaLoop['coluna']++;
            casaLoop['linha']++;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['coluna'] > 8 || casaLoop['linha'] > 8) {
                return null;
            }

            pecaLoop = this.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push(casaLoop);
            }
            if (pecaLoop == jogador) {
                return capturadas;
            }
        }
        return null;
    },

    capturasSuldeste: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = casa;
        while(pecaLoop != 0) {
            casaLoop['coluna']++;
            casaLoop['linha']--;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['coluna'] > 8 || casaLoop['linha'] < 1) {
                return null;
            }

            pecaLoop = this.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push(casaLoop);
            }
            if (pecaLoop == jogador) {
                return capturadas;
            }
        }
        return null;
    },

    capturasSuldoeste: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = casa;
        while(pecaLoop != 0) {
            casaLoop['coluna']--;
            casaLoop['linha']--;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['coluna'] < 1 || casaLoop['linha'] < 1) {
                return null;
            }

            pecaLoop = this.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push(casaLoop);
            }
            if (pecaLoop == jogador) {
                return capturadas;
            }
        }
        return null;
    },

    capturasNoroeste: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = casa;
        while(pecaLoop != 0) {
            casaLoop['coluna']--;
            casaLoop['linha']++;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['coluna'] < 1 || casaLoop['linha'] > 8) {
                return null;
            }

            pecaLoop = this.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push(casaLoop);
            }
            if (pecaLoop == jogador) {
                return capturadas;
            }
        }
        return null;
    }

}