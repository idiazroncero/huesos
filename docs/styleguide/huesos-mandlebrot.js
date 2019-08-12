$(function(){
    
    $('.item--has-children').each(function(item, index){
        var menu = $(this).children('.item__children');
        menu.hide();

        $(this).on('click', function(e){
            $(this).toggleClass('item--has-children--open');
            e.stopPropagation();
            menu.toggle();
        })
    })

    $('.preview-tag').on('click', function(){
        $(this).parent('.pen-preview').toggleClass('pen-preview--medium');
    })

    $('.is-current').each(function(){
        $(this).parents('ul, li').show();
        $(this).parents('.item--has-children').addClass('item--has-children--open');
    });


    $('#toggle-grid').on('click', function(){
        $('body, .wrapper__sidebar').toggleClass('show-grid');
    })
})