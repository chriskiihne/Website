$(document).ready(function(){
    
    var loadTime = 0;
    var interval = setInterval(function(){
        if(document.readyState === 'complete'){
            clearInterval(interval);
            tab();
            setTimeout(function(){ $('.tab-line').css({'transition': 'var(--ease)'}); }, 20);
            $('.content').removeClass('loading');
        } else {
            loadTime += 5;
        }
    }, 5);
    
    $('.tab').click(function(){
        $('.tab').removeClass('active');
        $(this).addClass('active');
        tab();
    });
    
    function tab(){
        $('.tab-line').css({'width': $('.tab.active').outerWidth() + 'px', 'left': $('.tab.active').position().left + 'px'});
    }
    
});
