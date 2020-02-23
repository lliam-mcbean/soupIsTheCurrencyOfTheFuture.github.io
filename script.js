let $star = $('.star');
let $win = $(window);

$win.on('scroll', function() {
    let top = $win.scrollTop();
    $star.css('transform', 'rotate(' + top + 'deg)');
});