simplegal
=========

Simple image gallery plugin for jQuery. Similar to the simple image gallery on Craigslist. Add your own styles to make it awesome.

How to use it
-------------

Include jQuery and jquery.simplegal.js

Initialize the gallery with a list of photos

    var thumbs = [
        'http://lorempixel.com/75/75/sports',
        'http://lorempixel.com/75/75/sports'
    ];

     var larges = [
        'http://lorempixel.com/500/500/sports',
        'http://lorempixel.com/500/500/sports'
    ];

    $('#gallery').SimpleGal(thumbs, larges);

See example.html for a working demo
