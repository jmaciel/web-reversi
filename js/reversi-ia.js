/**
 * Created by J on 26/08/2016.
 */
if (typeof jQuery === 'undefined') { throw new Error('Reversi\'s JavaScript requires jQuery') }

var reversiIa = {

    /*
     * O : vazia
     * 1 : preta
     * 2 : branca
     */

    // Atributos ------------------------------------------------------------
    tabuleiro: {
        '1':{'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0},
        '2':{'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0},
        '3':{'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0},
        '4':{'1': 0, '2': 0, '3': 0, '4': 2, '5': 1, '6': 0, '7': 0, '8': 0},
        '5':{'1': 0, '2': 0, '3': 0, '4': 1, '5': 2, '6': 0, '7': 0, '8': 0},
        '6':{'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0},
        '7':{'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0},
        '8':{'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0}
    },

    jogadorPreto: 1,

    jogadorBranco: 2,

    // Funções ---------------------------------------------------------------

    movimentosDisponiveis: function (jogador) {
        var teste = false;
        jQuery.each( reversiIa.tabuleiro, function (nLinha, linha) {
            jQuery.each( linha, function (nColuna, peca) {
                if(peca == 0) {
                    if (reversiIa.getCapturadas({'linha': nLinha, 'coluna': nColuna}, jogador) != null) {
                        teste = true;
                    }
                }
            });
        });
        return teste;
    },

    getPlacar: function () {
        var pPreto = 0;
        var pBranco = 0;

        jQuery.each( reversiIa.tabuleiro, function (nLinha, linha) {
            jQuery.each( linha, function (nColuna, peca) {
                if( peca == 1 ) {
                    pPreto++;
                } else if( peca == 2 ) {
                    pBranco++;
                }
            });
        });

        return {'preto': pPreto, 'branco': pBranco};

    },

    // TODO: verificar melhor forma de especificar o parametro
    colocarPeca: function (casa, jogador) {
        var capturadas = reversiIa.getCapturadas(casa, jogador);
        if(capturadas != null) {
            reversiIa.capturar(capturadas, casa, jogador);
        }
    },

    capturar: function (capturadas, casa, jogador) {
        reversiIa.tabuleiro[casa['linha']] [casa['coluna']] = jogador;
        capturadas.forEach(function (casa) {
            reversiIa.tabuleiro[casa['linha']] [casa['coluna']] = jogador;
        });
    },

    /*
     * Verifica se a jogada é possível
     */
    getCapturadas: function (casa, jogador) {
        var capturadas = new Array();

        if(reversiIa.verificaCasa(casa) !== 0){
            return null;
        }

        var capturadasNorte = reversiIa.capturasNorte(casa, jogador);
        if(capturadasNorte != null) {
            capturadas = capturadas.concat(capturadasNorte);
        }

        var capturadasNordeste = reversiIa.capturasNordeste(casa, jogador);
        if(capturadasNordeste != null) {
            capturadas = capturadas.concat(capturadasNordeste);
        }

        var capturadasLeste = reversiIa.capturasLeste(casa, jogador);
        if(capturadasLeste != null) {
            capturadas = capturadas.concat(capturadasLeste);
        }

        var capturadasSuldeste = reversiIa.capturasSuldeste(casa, jogador);
        if(capturadasSuldeste != null) {
            capturadas = capturadas.concat(capturadasSuldeste);
        }

        var capturadasSul = reversiIa.capturasSul(casa, jogador);
        if(capturadasSul != null) {
            capturadas = capturadas.concat(capturadasSul);
        }

        var capturadasSuldoeste = reversiIa.capturasSuldoeste(casa, jogador);
        if(capturadasSuldoeste != null) {
            capturadas = capturadas.concat(capturadasSuldoeste);
        }

        var capturadasOeste = reversiIa.capturasOeste(casa, jogador);
        if(capturadasOeste != null) {
            capturadas = capturadas.concat(capturadasOeste);
        }

        var capturadasNoroeste = reversiIa.capturasNoroeste(casa, jogador);
        if(capturadasNoroeste != null) {
            capturadas = capturadas.concat(capturadasNoroeste);
        }

        if(capturadas.length > 0) {
            return capturadas;
        }

        return null;
    },

    /*
     * Retorna o que existe na casa, retorna null caso a casa não exista
     */
    verificaCasa: function (casa) {
        if (typeof reversiIa.tabuleiro[casa['linha']][casa['coluna']] == 'undefined') {
            return null;
        }
        return reversiIa.tabuleiro[casa['linha']][casa['coluna']];
    },

    capturasOeste: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = {'linha': casa['linha'], 'coluna': casa['coluna']};
        while(pecaLoop != 0) {
            casaLoop['coluna']--;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['coluna'] < 1) {
                return null;
            }

            pecaLoop = reversiIa.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push({'linha': casaLoop['linha'], 'coluna': casaLoop['coluna']});
            }
            if (pecaLoop == jogador) {
                if(capturadas.length > 0) {
                    return capturadas;
                }
                break;
            }
        }
        return null;
    },

    capturasLeste: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = {'linha': casa['linha'], 'coluna': casa['coluna']};
        while(pecaLoop != 0) {
            casaLoop['coluna']++;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['coluna'] > 8) {
                return null;
            }

            pecaLoop = reversiIa.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push({'linha': casaLoop['linha'], 'coluna': casaLoop['coluna']});
            }
            if (pecaLoop == jogador) {
                if(capturadas.length > 0) {
                    return capturadas;
                }
                break;
            }
        }
        return null;
    },

    capturasNorte: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = {'linha': casa['linha'], 'coluna': casa['coluna']};
        while(pecaLoop != 0) {
            casaLoop['linha']--;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['linha'] < 1) {
                return null;
            }

            pecaLoop = reversiIa.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push({'linha': casaLoop['linha'], 'coluna': casaLoop['coluna']});
            }
            if (pecaLoop == jogador) {
                if(capturadas.length > 0) {
                    return capturadas;
                }
                break;
            }
        }
        return null;
    },

    capturasSul: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = {'linha': casa['linha'], 'coluna': casa['coluna']};
        while(pecaLoop != 0) {
            casaLoop['linha']++;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['linha'] > 8) {
                return null;
            }

            pecaLoop = reversiIa.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push({'linha': casaLoop['linha'], 'coluna': casaLoop['coluna']});
            }
            if (pecaLoop == jogador) {
                if(capturadas.length > 0) {
                    return capturadas;
                }
                break;
            }
        }
        return null;
    },

    capturasSuldeste: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = {'linha': casa['linha'], 'coluna': casa['coluna']};
        while(pecaLoop != 0) {
            casaLoop['coluna']++;
            casaLoop['linha']++;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['coluna'] > 8 || casaLoop['linha'] > 8) {
                return null;
            }

            pecaLoop = reversiIa.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push({'linha': casaLoop['linha'], 'coluna': casaLoop['coluna']});
            }
            if (pecaLoop == jogador) {
                if(capturadas.length > 0) {
                    return capturadas;
                }
                break;
            }
        }
        return null;
    },

    capturasNordeste: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = {'linha': casa['linha'], 'coluna': casa['coluna']};
        while(pecaLoop != 0) {
            casaLoop['coluna']++;
            casaLoop['linha']--;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['coluna'] > 8 || casaLoop['linha'] < 1) {
                return null;
            }

            pecaLoop = reversiIa.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push({'linha': casaLoop['linha'], 'coluna': casaLoop['coluna']});
            }
            if (pecaLoop == jogador) {
                if(capturadas.length > 0) {
                    return capturadas;
                }
                break;
            }
        }
        return null;
    },

    capturasNoroeste: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = {'linha': casa['linha'], 'coluna': casa['coluna']};
        while(pecaLoop != 0) {
            casaLoop['coluna']--;
            casaLoop['linha']--;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['coluna'] < 1 || casaLoop['linha'] < 1) {
                return null;
            }

            pecaLoop = reversiIa.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push({'linha': casaLoop['linha'], 'coluna': casaLoop['coluna']});
            }
            if (pecaLoop == jogador) {
                if(capturadas.length > 0) {
                    return capturadas;
                }
                break;
            }
        }
        return null;
    },

    capturasSuldoeste: function (casa, jogador) {
        var capturadas = new Array();
        var pecaLoop = jogador;
        var casaLoop = {'linha': casa['linha'], 'coluna': casa['coluna']};
        while(pecaLoop != 0) {
            casaLoop['coluna']--;
            casaLoop['linha']++;

            // testa se chegou ao fim do tabuleiro
            if(casaLoop['coluna'] < 1 || casaLoop['linha'] > 8) {
                return null;
            }

            pecaLoop = reversiIa.verificaCasa(casaLoop);

            if (pecaLoop != 0 && pecaLoop != jogador) {
                capturadas.push({'linha': casaLoop['linha'], 'coluna': casaLoop['coluna']});
            }
            if (pecaLoop == jogador) {
                if(capturadas.length > 0) {
                    return capturadas;
                }
                break;
            }
        }
        return null;
    }

}