function upDate() {
	let dateStarted = new Date(2020, 04, 06);
	let now = new Date();
	document.getElementById("time-since").innerHTML = (now-dateStarted);
	setTimeout(upDate, 1);
};
upDate()