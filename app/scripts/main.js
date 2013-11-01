/*$('#main-nav li').hover(function () {
        'use strict';
        $(this).children('div').slideDown(500);
    },
    function () {
        'use strict';
        $(this).children('div').fadeOut(0);
    });*/

/*$('#main-nav li').hover(function() {
        'use strict';
        $(this).children('div').fadeIn({queue: false});
        $(this).animate({backgroundColor: '#5b6770', color: '#f4f4f4'});
    },
    function() {
        'use strict';
        $(this).children('div').fadeOut(0, {queue: false});
        $(this).css('background-color', '#fff', 'color', '#5b6770');
});*/

$(function(){
    $('#close').click(function(e){
        e.preventDefault(); // prevent the default action
        e.stopPropagation; // stop the click from bubbling
        $('body div.container #main-nav li:hover > div').css('visibility', 'hidden');
    });
});

