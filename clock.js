window.onload = (function(){
	var clockSeconds = document.getElementById("clockSeconds"),
		clockMinutes = document.getElementById("clockMinutes"),
		clockHours = document.getElementById("clockHours"),
		minutes, seconds, hours;
	getTime();
	function getTime(){
		var date = new Date();
		seconds = date.getSeconds();
		minutes = date.getMinutes();
		hours = date.getHours();
		clockSeconds.style.transform = "rotate(" + seconds * 6 + "deg)";
		clockMinutes.style.transform = "rotate(" + minutes * 6 + "deg)";
		clockHours.style.transform = "rotate(" + hours * 30 + "deg)";		
	}
	setInterval(getTime, 100); // 100 instead of 1000, firefox bad edges
});