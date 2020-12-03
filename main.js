function changePunct(){
	let punctNum = Math.random();
	let punct;
	if (punctNum < (1/3)) {
		punct = "???";
	} else if (punctNum >= (1/3) && punctNum < (2/3)) {
		punct = "!!!";
	} else {
		punct = "...";
	}
	document.getElementById("punctuation").innerHTML = punct;
}

function hiss(){
	document.getElementsByClassName("wpngrl-hiss")[0].style.display="block";
	document.getElementsByClassName("wpngrl-img")[0].style.display="none";
}

function unHiss(){
	document.getElementsByClassName("wpngrl-hiss")[0].style.display="none";
	document.getElementsByClassName("wpngrl-img")[0].style.display="block";
}

changePunct()

