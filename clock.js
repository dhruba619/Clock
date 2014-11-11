window.onload = function displayclock(){
var clockCanvas = document.getElementById("clock");
var clockContext = clockCanvas.getContext('2d');
clockContext.fillStyle = 'blue';
clockContext.fillText("saasd",40,40);
Time = new Date();
hour = Time.getHours();
minutes = Time.getMinutes();
seconds = Time.getSeconds();
startTime = (setInterval(function(seconds, clockContext){
			seconds++;
			clockContext.fillText(seconds,40,40);
			}),1000
		)();
alert(hour+':'+minutes+':'+seconds);
}

