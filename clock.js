window.onload = function Runtime(){
	setInterval(displayclock,1000);
	displayclock();
}

function displayclock(){
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    var time = padZero(format(h)) + ":" + padZero(m) + ":" + padZero(s) + " " + daytime(h);
    document.querySelector('#current-time').innerHTML = time;

   	// setting up a convas context for drawing
   	var canvas = document.querySelector('#clock');
   	var context = canvas.getContext('2d');

   	var clockRadius = canvas.width/2 -30;

   	var clockX = canvas.width /2;
   	var clockY = canvas.width /2;

   	tau = 2 * Math.PI;


	// for (var i = 0; i < 12; i++)
	// {
	// 	var innerDist		= (i % 3) ? 0.75 : 0.7;
	// 	var outerDist		= (i % 3) ? 0.95 : 1.0;
	// 	context.lineWidth 	= (i % 3) ? 4 : 10;
	// 	context.strokeStyle = '#999999';
		
	// 	var armRadians = (tau * (i/12)) - (tau/4);
	// 	var x1 = clockX + Math.cos(armRadians) * (innerDist * clockRadius);
	// 	var y1 = clockY + Math.sin(armRadians) * (innerDist * clockRadius);
	// 	var x2 = clockX + Math.cos(armRadians) * (outerDist * clockRadius);
	// 	var y2 = clockY + Math.sin(armRadians) * (outerDist * clockRadius);
		
	// 	context.beginPath();
	// 	context.moveTo(x1, y1); // Start at the center
	// 	context.lineTo(x2, y2); // Draw a line outwards
	// 	context.stroke();
	// }

   	function drawArm(progress,armThickness, armLength, armColor, daylight,val){
   		var armRadians  =(tau * progress) - (tau/4);
   		// var armLenght = armLenght;
   		var targetX = clockX + Math.cos(armRadians) * (armLength * clockRadius);  
   		var targetY = clockY + Math.sin(armRadians) * (armLength * clockRadius);
		
		//background
		context.beginPath()
		context.arc(clockX,clockY,clockRadius+12, 0, Math.PI*2,true);
		if(daylight)
		{
			context.fillStyle = 'rgba(255,200,040,0.1)';
      		context.fill();
		}
		else
		{
			context.fillStyle = 'rgba(044,044,044,0.1)';
      		context.fill();
		}
   		armRadius = armThickness; 
   		context.arc(targetX,targetY,armRadius, 0, Math.PI*2,true);
   		// context.fillStyle = armColor;
   		context.fill();

   		//time hands
   		context.beginPath()
   		context.moveTo(clockX,clockY);
   		context.lineTo(targetX, targetY);
   		context.strokeStyle = "white";
   		context.lineWidth = 2;
   		context.stroke();

   		//hand circle
   		context.beginPath()
		context.arc(targetX,targetY,armThickness, 0, Math.PI*2,true);
		context.fillStyle =armColor;
		context.fill();

   		//center circle
   		context.beginPath()
		context.arc(clockX,clockY,3, 0, Math.PI*2,true);
		context.fillStyle ="#000000";
		context.fill();

		}
		context.clearRect(0, 0, canvas.width, canvas.height);
		var daylight = 1;
		if(h>18 || h<5)
		{
			daylight = 0;
		}
   		drawArm(((h+(m/60))/12),8,0.5,'#0000DD',daylight,h%12);
   		drawArm(m/60,5,0.80,'#FFFFFF',daylight,m%60);
   		drawArm(s/60,4,1,'#DD0000',daylight,padZero(s%60));
}
 function padZero(sec){
    	if(sec<10)
    		return '0' + sec;
    	else
    		return sec;
    }

    function format(hour){
    	if(hour > 12)
    		return (hour-12);
    	else
    		return hour;
    }

    function daytime(hour){
    	if(hour > 12)
    		return 'PM';
    	else
    		return 'AM';
    }