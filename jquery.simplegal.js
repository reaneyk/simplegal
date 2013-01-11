/**
 * @author KC Reaney (http://yenaer.com)
 * @info http://github.com/reaneyk/simplegal
 */
(function( $ ) {
    $.fn.SimpleGal = function( thumbs, larges ) {

        var full = $('<div>').addClass('simplegal-img');
        full.append($('<img>').attr('src', larges[0]).addClass('largePreview0'));

        var preview = $('<div>').addClass('simplegal-preview');

        $.each(thumbs, function(index, value){

            var img = $('<img>').attr('src', value).addClass('preview' + index);
            img.on('click', function(){
    
                var classes = $(this).attr('class').match(/preview(\d+)/);
            
                $('.simplegal-img img').hide();

                if (!$('.simplegal-img img.largePreview' + classes[1]).length) {
                    var newLarge = $('<img>').attr('src', larges[classes[1]]).addClass('largePreview' + classes[1]);
                    $('.simplegal-img').append(newLarge);

                }
                else {
                    $('.simplegal-img img.largePreview' + classes[1]).show();
                }
            });

            preview.append(img);
        });

        this.append(full);
        this.append(preview);

        return this;
    };
})( jQuery );
