import $ from 'jquery';
import Game from './game';

function init($el: JQuery<HTMLElement>, game: Game) {
    const $container = $(new DocumentFragment());
    for (let i=0; i < game.size; i++) {
        $container.append(`<div class="square" data-index="${i}"></div>`);
    }
    $el.addClass('container');
    $el.append($container);
}

function repaint($el: JQuery<HTMLElement>, game: Game) {
    $('.square', $el).removeClass('winner').eq(game.winnerIndex).addClass('winner');
    $('#score').text(g.score);
}

const g = new Game();
const $el = $('#game');
init($el, g);
repaint($el, g);

$('.square', $el).on('click', function(ev) {
    ev.preventDefault();
    const idx = ev.target.dataset.index;    
    g.click(Number(idx));
    repaint($el, g);
});