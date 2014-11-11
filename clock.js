window.onload = function displayclock(){
var clockCanvas = document.getElementById("clock");
var context = clockCanvas.getContext('2d');
Time = new Date();
Time.hour = Time.getHours();
Time.minute = Time.getMinutes();
Time.seconds = Time.getSeconds();

var grd = context.createLinearGradient(0,0,200,200);
grd.addColorStop(0,'#ffee77');
grd.addColorStop(1,"#ffee77");

var height = clockCanvas.height;
	width = clockCanvas.width;
alert(height + " " + width);
// context.arc()
}

