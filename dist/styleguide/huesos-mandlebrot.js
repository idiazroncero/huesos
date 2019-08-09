$(function(){
    
    $('.item--has-children').each(function(item, index){
        var menu = $(this).children('.item__children');
        menu.hide();

        $(this).on('click', function(e){
            e.stopPropagation();
            menu.toggle();
        })
    })

    $('.preview-tag').on('click', function(){
        $(this).parent('.pen-preview').toggleClass('pen-preview--medium');
    })

    $('.is-current').each(function(){
        $(this).parents('ul, li').show();
    });


    $('#toggle-grid').on('click', function(){
        $('body').toggleClass('show-grid');
    })
})