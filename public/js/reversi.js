if (typeof jQuery === 'undefined') { throw new Error('Reversi\'s JavaScript requires jQuery') }

var player = 'preta';

function classeToDisplay(classe){
	var display = new Array();
	display['preta'] = 'Preto';
	display['branca'] = 'Branco';
	return display[classe];
}

function selecionarJogador(objeto){
	player = $(objeto).data('player');
	$('#player').html("Jogador: "+classeToDisplay(player));
}

function mudarJogador(){
	var change = new Array();
	change['preta'] =  'branca';
	change['branca'] =  'preta';
	player = change[player];
	$('#player').html("Jogador: "+classeToDisplay(player));
}

function colocarPeca(objeto){
	  $(objeto).html('<div class="peca peca-'+player+'"></div>');
}

function capturar(objeto){
	var pos = new Array();
	pos['x'] = $(objeto).data('x');
	pos['y'] = $(objeto).data('y');
	
	temPeca = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca');
	
	if(!temPeca){
		var capturadas = new Array();
		var teste = true;
		var line = new Array();
		while(teste == true){
			pos['y']--;
			if(pos['y'] > 0){
				temPeca = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca');
				if(temPeca){
					fim = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca-'+player);
					if(fim){
						capturadas = capturadas.concat(line);
						teste = false;
					}else{
						line.push('#'+pos['x']+'_'+pos['y']);
					}
				}else{
					teste = false;
				}
			}else{
				teste = false;
			}
		}
		
		pos['y'] = $(objeto).data('y');
		teste = true;
		var line = new Array();
		while(teste == true){
			pos['y']++;
			if(pos['y'] <= 8){
				temPeca = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca');
				if(temPeca){
					fim = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca-'+player);
					if(fim){
						capturadas = capturadas.concat(line);
						teste = false;
					}else{
						line.push('#'+pos['x']+'_'+pos['y']);
					}
				}else{
					teste = false;
				}
			}else{
				teste = false;
			}
		}
		
		pos['y'] = $(objeto).data('y');
		teste = true;
		var line = new Array();
		while(teste == true){
			pos['x']--;
			if(pos['x'] > 0){
				temPeca = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca');
				if(temPeca){
					fim = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca-'+player);
					if(fim){
						capturadas = capturadas.concat(line);
						teste = false;
					}else{
						line.push('#'+pos['x']+'_'+pos['y']);
					}
				}else{
					teste = false;
				}
			}else{
				teste = false;
			}
		}
		
		pos['x'] = $(objeto).data('x');
		teste = true;
		var line = new Array();
		while(teste == true){
			pos['x']++;
			if(pos['x'] <= 8){
				temPeca = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca');
				if(temPeca){
					fim = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca-'+player);
					if(fim){
						capturadas = capturadas.concat(line);
						teste = false;
					}else{
						line.push('#'+pos['x']+'_'+pos['y']);
					}
				}else{
					teste = false;
				}
			}else{
				teste = false;
			}
		}
		
		pos['x'] = $(objeto).data('x');
		pos['y'] = $(objeto).data('y');
		teste = true;
		var line = new Array();
		while(teste == true){
			pos['x']++;
			pos['y']++;
			if(pos['x'] <= 8 && pos['y'] <= 8){
				temPeca = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca');
				if(temPeca){
					fim = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca-'+player);
					if(fim){
						capturadas = capturadas.concat(line);
						teste = false;
					}else{
						line.push('#'+pos['x']+'_'+pos['y']);
					}
				}else{
					teste = false;
				}
			}else{
				teste = false;
			}
		}
		
		pos['x'] = $(objeto).data('x');
		pos['y'] = $(objeto).data('y');
		teste = true;
		var line = new Array();
		while(teste == true){
			pos['x']--;
			pos['y']--;
			if(pos['x'] > 0 && pos['y'] > 0){
				temPeca = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca');
				if(temPeca){
					fim = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca-'+player);
					if(fim){
						capturadas = capturadas.concat(line);
						teste = false;
					}else{
						line.push('#'+pos['x']+'_'+pos['y']);
					}
				}else{
					teste = false;
				}
			}else{
				teste = false;
			}
		}
		
		pos['x'] = $(objeto).data('x');
		pos['y'] = $(objeto).data('y');
		teste = true;
		var line = new Array();
		while(teste == true){
			pos['x']++;
			pos['y']--;
			if(pos['x'] <= 8 && pos['y'] > 0){
				temPeca = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca');
				if(temPeca){
					fim = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca-'+player);
					if(fim){
						capturadas = capturadas.concat(line);
						teste = false;
					}else{
						line.push('#'+pos['x']+'_'+pos['y']);
					}
				}else{
					teste = false;
				}
			}else{
				teste = false;
			}
		}
		
		pos['x'] = $(objeto).data('x');
		pos['y'] = $(objeto).data('y');
		teste = true;
		var line = new Array();
		while(teste == true){
			pos['x']--;
			pos['y']++;
			if(pos['x'] > 0 && pos['y'] <=8){
				temPeca = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca');
				if(temPeca){
					fim = $('#'+pos['x']+'_'+pos['y']).children().children().hasClass('peca-'+player);
					if(fim){
						capturadas = capturadas.concat(line);
						teste = false;
					}else{
						line.push('#'+pos['x']+'_'+pos['y']);
					}
				}else{
					teste = false;
				}
			}else{
				teste = false;
			}
		}
		
		jQuery.each(capturadas , function(index, value){
		     $(value).children().html('<div class="peca peca-'+player+'"></div>');; 
		});
		
		if(capturadas.length > 0){
			colocarPeca($(objeto));
			mudarJogador();
		}
	}
}

$(".player-selector").click(function(e){
	e.preventDefault();
	selecionarJogador($(this));
});

$(".casa").click(function(e){
	e.preventDefault();
	capturar($(this));
});

