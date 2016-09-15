if (typeof jQuery === 'undefined') { throw new Error('Reversi\'s JavaScript requires jQuery') }

$('#bt-local-player').click(function(e){
    e.preventDefault();
    window.location.href = 'pages/tabuleiro.html';
});

$('#bt-single-player').click(function(e){
    e.preventDefault();
    swal({
        title: "Desculpa",
        text: "Essa função ainda não está pronta",
        type: "info"
    });
    //window.location.href = 'pages/tabuleiro-sp.html';
});

$('#bt-multi-player').click(function(e){
    e.preventDefault();
    swal({
        title: "Desculpa",
        text: "Essa função ainda não está pronta",
        type: "info"
    });
});