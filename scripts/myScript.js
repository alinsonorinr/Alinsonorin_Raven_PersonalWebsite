/*============================================
	     smooth scroll script
==============================================*/
$(document).ready(function(){
  
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
     	 $('html, body').animate({
        	scrollTop: $(hash).offset().top
      		}, 800, function(){
       	 window.location.hash = hash;
      });
    }
  });
});

/*============================================
	      Menubar shrinks script
==============================================*/
$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
    }
    else {
    $('#nav').removeClass('shrink');
    }
  });
});

/*============================================
	      Contact popup script
==============================================*/
function gmail() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}
function facebook() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}
function cellphone() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}
function telephone() {
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("show");
}

/*============================================
	      Map to my address
==============================================*/
