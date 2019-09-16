let ctx = document.getElementById('pioupiou').getContext('2d');
let cadreW = ctx.canvas.width;
let cadreH = ctx.canvas.height;
let robotPosX = ctx.canvas.width / 2;
let robotPosY = ctx.canvas.height - 110;

ctx.beginPath();
ctx.rect(0, 0, cadreW, cadreH);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();

function clearCanvas() {
    ctx.beginPath();
    ctx.clearRect(0, 0, cadreW, cadreH);
    ctx.rect(0, 0, cadreW, cadreH);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

//clearCanvas();

let robot = new Image(50, 50);
robot.onload = function() {
    ctx.drawImage(robot, robotPosX - (robot.width / 2), robotPosY, robot.width*2, robot.height*2);
  };
robot.src = 'images/robot1.svg';
//ctx.drawImage(robot, 50, 50);


document.addEventListener("keydown", keyDownHandler, false);   
document.addEventListener("keyup", keyUpHandler, false);
 
let moveRight = false;
let moveLeft = false;
let shootStart = false;
 
function keyDownHandler(e) {
    if (e.keyCode == '39') { // Touche ">"
        moveRight = true;
    } else if (e.keyCode == '37') { // Touche "<"
        moveLeft = true;
    } else if (e.keyCode == '32') {
        shootStart = true;
    }
}
 
function keyUpHandler(e) {
    if (e.keyCode == '39') { // Touche ">"
        moveRight = false;
     } else if (e.keyCode == '37') {  // Touche "<"
        moveLeft = false;
    } else if (e.keyCode == '32') {
        shootStart = true;
    }
}

function moveRobot() {
    if (moveTop == true) {
        // Move player positon top
    }
 
    // etc
}

function drawRobot() {
    if (shootStart == true) {
        
    }

    if (moveRight == true && ((robotPosX + (robot.width / 2)) < ctx.canvas.width)) {
        clearCanvas();
        
        robotPosX +=5;
        robot.onload = function() {ctx.drawImage(robot, robotPosX - (robot.width / 2), robotPosY, robot.width*2, robot.height*2);};
        robot.src = 'images/robot1.svg';
    }
    if (moveLeft == true && ((robotPosX + (robot.width / 2)) > 0)) {
         clearCanvas();
        
        robotPosX -=5;
        robot.onload = function() {ctx.drawImage(robot, robotPosX - (robot.width / 2), robotPosY, robot.width*2, robot.height*2);};
        robot.src = 'images/robot1.svg';
    }
    /*robot.onload = function() {
        ctx.drawImage(robot, robotPosX - (robot.width / 2), robotPosY, robot.width*2, robot.height*2);
      };
    robot.src = 'images/robot1.svg';*/
}

setInterval(drawRobot, 20);