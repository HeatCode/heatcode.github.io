//DROP MENU:  Create a select and append to #menuA
var $select = $("<select></select>");
$("#menuA").append($select);

//Cycle over menu links
$("#menuA a").each(function(){
  var $anchor = $(this);
  
  //Create an option
  var $option = $("<option></option>");
  
  //Deal with selected options depending on current page

if ($anchor.parent().hasClass("selected")) {
$option.prop("selected", true);
}
  
  //Option's value is the href
  $option.val($anchor.attr("href"));
  //Options text is the text of link
  $option.text($anchor.text());
  
  //Append option to select
  $select.append($option);
});


////GO BUTTON: Create a button to click to go to selects locations
//
var $button = $("<button>Go</button>");
$("#menuA").append($button);

//Bind change the lister to select
$select.change(function() {

  //Go to selects location
  window.location = $select.val();
});


////////////////////////////////////////////////////////////////////////////

//Create a select and append to #mainBar
var $select = $("<select></select>");
$("#mainBar").append($select);

//Cycle over menu links
$("#mainBar a").each(function(){
  var $anchor = $(this);
  
  //Create an option
  var $option = $("<option></option>");
  
  //Deal with seceted options depending on current page

if ($anchor.parent().hasClass("selected")) {
$option.prop("selected", true);
}
  
  //Option's value is the href
  $option.val($anchor.attr("href"));
  //Options text is the text of link
  $option.text($anchor.text());
  
  //Append option to select
  $select.append($option);
});


////GO BUTTON: Create a button to click to go to selects locations
//
// var $button = $("<button>Go</button>");
// $("#mainBar").append($button);

//Bind change the lister to select
$select.change(function() {

  //Go to selects location
  window.location = $select.val();
});


// ===================jQuery Scroll-based Animations===============
/*
    Version 1.3.2
    The MIT License (MIT)

    Copyright (c) 2014 Dirk Groenen

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
*/

(function($){
    $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            offset: 100,
            callbackFunction: function(elem){}
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            windowHeight = $(window).height();

        this.checkElements = function(){
            // Set some vars to check with
            var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),
                viewportTop = $(scrollElem).scrollTop(),
                viewportBottom = (viewportTop + windowHeight);

            $elem.each(function(){
                var $obj = $(this);
                // If class already exists; quit
                if ($obj.hasClass(options.classToAdd)){
                    return;
                }

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = Math.round( $obj.offset().top ) + options.offset,
                    elemBottom = elemTop + ($obj.height());

                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)){
                    $obj.addClass(options.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    options.callbackFunction($obj);
                }
            });
        };

        // Run checkelements on load and scroll
        $(window).scroll(this.checkElements);
        this.checkElements();

        // On resize change the height var
        $(window).resize(function(e){
            windowHeight = e.currentTarget.innerHeight;
        });
    };
})(jQuery);





















