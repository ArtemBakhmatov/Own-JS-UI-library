import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(0).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

//console.log($('div').eq(2).find('.some'));

//console.log($('button').html('Hello!'));

//console.log($('.some').closest('.findmeq'));

console.log($('.findme').siblings());


