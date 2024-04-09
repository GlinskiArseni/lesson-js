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