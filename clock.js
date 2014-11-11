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

   	var clockRadius = 100;

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

   	function drawArm(progress,armThickness, armLength, armColor){
   		var armRadians  =(tau * progress) - (tau/4);
   		// var armLenght = armLenght;

   		var targetX = clockX + Math.cos(armRadians) * (armLength * clockRadius);  
   		var targetY = clockY + Math.sin(armRadians) * (armLength * clockRadius);
   		// console.log(targetX + " " + targetY);
   		var grd = context.createLinearGradient(0,0,170,0);
   		context.beginPath()
		context.arc(clockX,clockY,clockRadius-5, 0, Math.PI*2,true);
		grd.addColorStop(0,"#DD0000");
		grd.addColorStop(0.5,"#00DD00");
		grd.addColorStop(1,"#0000DD");
		context.strokeWidth = 3;
		context.strokeStyle = grd;
		context.stroke();


   		var grd = context.createLinearGradient(0,0,170,0);
   		context.beginPath()
		context.arc(clockX,clockY,clockRadius-10, 0, Math.PI*2,true);
		grd.addColorStop(0,"#7744ee");
		grd.addColorStop(0.5,"#DD5555");
		grd.addColorStop(1,"#77ee55");
		context.strokeStyle = grd;
		context.strokeFill = "#000000"
		context.stroke();

		context.beginPath()
		context.arc(clockX,clockY,3, 0, Math.PI*2,true);
		context.fillStyle ="#000000";
		context.stroke();

   		context.lineWidth = armThickness;
   		context.strokeStyle = armColor;

   		context.beginPath();
   		context.moveTo(clockX, clockY);
   		context.lineTo(targetX, targetY);
   		context.stroke();


		}
		context.clearRect(0, 0, canvas.width, canvas.height);
   		drawArm(h/12,6,0.5,'#0000DD');
   		drawArm(m/60,4,0.80,'#00DD00');
   		drawArm(s/60,2,1,'#DD0000');
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