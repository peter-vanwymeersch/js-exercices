var ctx = document.getElementById('drapeau').getContext('2d');
//ctx.fillRect(100, 100, 100, 150);
//ctx.arc(150,150,60,0,Math.PI,false);

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 170);
ctx.lineTo(120, 170);
ctx.lineTo(120, 20);
ctx.closePath();
ctx.stroke();
ctx.strokeStyle = "black";
ctx.fillStyle = "blue";
ctx.fill();

ctx.beginPath();
ctx.moveTo(120, 20);
ctx.lineTo(120, 170);
ctx.lineTo(220, 170);
ctx.lineTo(220, 20);
ctx.closePath();
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(220, 20);
ctx.lineTo(220, 170);
ctx.lineTo(320, 170);
ctx.lineTo(320, 20);
ctx.closePath();
ctx.strokeStyle = "black";
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
