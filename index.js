$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 300, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });