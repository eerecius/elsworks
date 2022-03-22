let shownPiece = document.getElementById("gallery-active");
let shownText = document.getElementById("gallery-text");

let newerArrow = document.getElementById("newer-arrow");
let olderArrow = document.getElementById("older-arrow");

let activePiece;
let nextPiece;
let previousPiece;

function updateArrows() {
	if (previousPiece === null) {
		newerArrow.disabled = true;
	} else {
		newerArrow.disabled = false;
	}
	if (nextPiece === null) {
		olderArrow.disabled = true;
	} else {
		olderArrow.disabled = false;
	}
}

function enlarge(piece){	
	activePiece = piece;
	
	shownPiece.src = piece.src;
	shownText.innerHTML = piece.title.replace(" - ", "<br>");
	
	nextPiece = piece.nextElementSibling;
	previousPiece = piece.previousElementSibling;
	
	document.getElementById("content").style.display = "none";
    document.getElementById("page-title").style.display = "none";
	document.getElementById("gallery-container").style.display = "block";
	
	updateArrows();
}

function ensmall() {
	document.getElementById("content").style.display = "block";
    document.getElementById("page-title").style.display = "block";
	document.getElementById("gallery-container").style.display = "none";
	
	newerArrow.disabled = false;
	olderArrow.disabled = false;
}

function scrollToRight() {	
	if (nextPiece !== null) {
		shownPiece.src = nextPiece.src;
		shownText.innerHTML = nextPiece.title.replace(" - ", "<br>");
	
		activePiece = nextPiece;
	
		previousPiece = activePiece.previousElementSibling;
		nextPiece = activePiece.nextElementSibling;
	} else {
		return;
	}
	
	updateArrows();
}

function scrollToLeft() {
	if (previousPiece !== null) {
		shownPiece.src = previousPiece.src;
		shownText.innerHTML = previousPiece.title.replace(" - ", "<br>");
		
		activePiece = previousPiece;
		
		previousPiece = activePiece.previousElementSibling;
		nextPiece = activePiece.nextElementSibling;
	} else {
		return;
	}
	
	updateArrows();
}
