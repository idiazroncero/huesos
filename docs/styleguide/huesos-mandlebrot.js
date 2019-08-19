$(function(){
    
    $('.item--has-children').each(function(item, index){
        var menu = $(this).children('.item__children');
        menu.hide();

        $(this).on('focus', function(e){
            // // For the focus, first determine if we are targeting the parent itself
            var isParent = $(e.target).get(0) === $(this).get(0);

            if(isParent) {
                $(this).toggleClass('item--has-children--open');
                menu.toggle();
            }

            e.stopImmediatePropagation();

        }).on('mousedown touch', function(e){
            // Follow it ONLY if is a link
            if(e.target.nodeName === 'A') {
                return true;
            };
            $(this).toggleClass('item--has-children--open');
            menu.toggle();
            e.preventDefault();
            e.stopImmediatePropagation();
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