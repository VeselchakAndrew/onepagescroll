$('#fullpage').fullpage({
    anchors: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6', 'Page7'],
    menu: '#meinMenu',
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
});


// button scr
(function() {
    var removeSuccess;

    removeSuccess = function() {
        return $('.button').removeClass('success');
    };

    $(document).ready(function() {
        return $('.button').click(function() {
            $(this).addClass('success');
            return setTimeout(removeSuccess, 3000);
        });
    });

}).call(this);