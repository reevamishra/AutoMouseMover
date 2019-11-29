// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

// for (var x = 0; x < width; x++)
// {
// 	y = height * Math.sin((twoPI * x) / width) + height;
// 	robot.moveMouse(x, y);
// }
var mouse = robot.getMousePos();

for (var i=0;i<1000;i++){
    // robot.moveMouse(5,10);
    // setTimeout(5000);
    // robot.moveMouse(50,100);
    // setTimeout(5000);
    mouse = robot.getMousePos();
    delay(2000000);
    var tmpMouse = robot.getMousePos();
    if(mouse.x == tmpMouse.x && mouse.y == tmpMouse.y){
        robot.moveMouse(mouse.x +1,mouse.y+1);
        delay(200);

    }

}

function delay(b){
    for(var i=0;i<b*1000;i++){

    }
}