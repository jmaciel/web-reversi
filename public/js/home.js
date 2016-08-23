if (typeof jQuery === 'undefined') { throw new Error('Reversi\'s JavaScript requires jQuery') }

$('#bt-single-player').click(function(e){
    e.preventDefault();
    window.location.href = '/tabuleiro.html';
});

$('#bt-multi-player').click(function(e){
    e.preventDefault();
    swal({
        title: "Sorry",
        text: "This feature is not ready yet",
        type: "info"
    });
});