let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height

let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
 if (fillCircle) {
    ctx.fill();
 }else{
     ctx.stroke();
 }
}
let Ball = function (){
this.x = width / 2;
this.y = height / 2;
this.xSpeed = 5;
this.ySpeed = 0;
};
Ball.prototype.move = function () {
this.x += this.xSpeed;
this.y += this.ySpeed;
if (this.x < 0) {
    this.x = width;
} else if(this.x > width) {
this.x = 0;
}
if (this.y < 0) {
    this.y = height;
}else if (this.y > height){
    this.y = 0 
}
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, 10, true)
}

Ball.prototype.setDirection = function (direction) {
    if(direction === "up"){
        this.xSpeed = 0;
        this.ySpeed = -5;
    } else if (direction === "down") {
        this.xSpeed = 0;
        this.ySpeed = 5;
    }else if (direction === "left") {
        this.xSpeed = -5;
        this.ySpeed = 0;
    }else if (direction === "right") {
        this.xSpeed = 5;
        this.ySpeed = 0;
    }else if (direction === "Stop") {
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
}


let ball = new Ball();//рисует новый мяч

let keyActions = { //задает название коду буквы
    32: "Stop",
    38: "up",
    40: "down",
    37: "left",
    39: "right"
}
$("body").keydown(function (event){//обработчик события нажатия клавиш
    let direction= keyActions[event.keyCode]
    ball.setDirection(direction)
   })

   setInterval(function (){
    ctx.clearRect(0, 0, width, height);
    ball.draw();
    ball.move();
    ctx.strokeRect(0, 0, width, height);
   }, 30)

/*
let keyNames = {
87: "W",
65: "A",
83: "S",
68: "D",
13: "Enter",
32: "Space",
38: "up",
40: "down",
37: "left",
39: "right",
18: "alt",
16: "shift"
};

$("body").keydown(function (event){
 console.log(keyNames[event.keyCode])
})



$("body").keydown(function (event) {
console.log(event.keyCode)
});
*/