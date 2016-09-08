var m = 1;

function plusSlides(n) {
  m = m + n;
  showSlides();
}

function currentSlide(n) {
	m = n;
  	showSlides();
  	halt();
}

function currentSlides(n) {
  m = n;
  showSlides();
}


function showSlides(){
  	var i;
  	var slides = document.getElementsByClassName("mySlides");
  	var labels = document.getElementsByClassName("label");
	  var dots = document.getElementsByClassName("dot");

  	if (m > slides.length) {
  		m = 1;
  	}
  	for (i = 0; i < slides.length; i++) {
	  	slides[i].style.display = "none";  
  	}
  	for (i = 0; i < labels.length; i++) {
	  	labels[i].className = labels[i].className.replace(" active", "");
  	}
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  	slides[m - 1].style.display = "block";  
  	labels[m - 1].className += " active";
    dots[m-1].className += " active";
  	m = m + 1; 
}

Timer = setInterval("showSlides()", 3000);

function start(){
	Timer = setInterval("showSlides()", 3000);
}

function halt(){
	clearInterval(Timer);
}
