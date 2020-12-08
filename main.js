function hiss(imgDefault, imgHover){
	document.getElementsByClassName(imgHover)[0].style.display="block";
	document.getElementsByClassName(imgDefault)[0].style.display="none";
}

function unHiss(imgDefault, imgHover){
	document.getElementsByClassName(imgHover)[0].style.display="none";
	document.getElementsByClassName(imgDefault)[0].style.display="block";
}

function galleryMouseover(num){
	document.getElementsByClassName("gallery-text")[num].style.letterSpacing="3px";
}

function galleryMouseout(num) {
	document.getElementsByClassName("gallery-text")[num].style.letterSpacing="-3px";
}

function showGallery(imgSet) {
	document.getElementsByClassName("gallery")[0].style.display="block";
}

function hideGallery() {
	document.getElementsByClassName("gallery")[0].style.display="none";
}