(function($) {


  $(function() {
    // pretty print code
    prettyPrint();

    // append top links to h3's
    $('#main h3')
      .append('<span class="top"><a href="#main">^</a></span>');
  });

})(jQuery);
