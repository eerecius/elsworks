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