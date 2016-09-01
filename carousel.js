var m = 1;

function currentSlide(n) {
	m = n;
  	showSlides();
  	halt();
}

function showSlides(){
  	var i;
  	var slides = document.getElementsByClassName("mySlides");
  	var labels = document.getElementsByClassName("label");
	
  	if (m > slides.length) {
  		m = 1;
  	}
  	for (i = 0; i < slides.length; i++) {
	  	slides[i].style.display = "none";  
  	}
  	for (i = 0; i < labels.length; i++) {
	  	labels[i].className = labels[i].className.replace(" active", "");
  	}
  	slides[m - 1].style.display = "block";  
  	labels[m - 1].className += " active";
  	m = m + 1; 
}

Timer = setInterval("showSlides()", 3000);

function start(){
	Timer = setInterval("showSlides()", 3000);
}

function halt(){
	clearInterval(Timer);
}
