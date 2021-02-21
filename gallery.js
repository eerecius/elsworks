function enlarge(piece){
	document.getElementById("gallery-active").src = piece.src;
	document.getElementById("gallery-text").innerHTML = piece.title.replace(" - ", "<br>");
	document.getElementById("content").style.display = "none";
	document.getElementById("gallery-container").style.display = "block";
}

function ensmall() {
	document.getElementById("content").style.display = "block";
	document.getElementById("gallery-container").style.display = "none";
}