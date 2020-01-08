function menuToggle() {
  var x = document.getElementById("mobile-nav");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  var elements = document.getElementsByClassName('nav-resize');

  for (var i = 0, max = elements.length; i < max; i++) {
  
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    elements[i].classList.remove("w3-xxlarge");
    elements[i].className += " w3-medium"
    document.getElementById('nav-items').style.paddingTop = "0px"
  } else {
    elements[i].classList.remove("w3-medium");
    elements[i].className += " w3-xxlarge"
    if (document.documentElement.clientWidth > 600) {
      document.getElementById('nav-items').style.paddingTop = "15px"
    }
    }

  }
}

$(document).ready(function(){

  scrollFunction(); //to fix loading stuff

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});