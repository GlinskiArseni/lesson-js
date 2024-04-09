/*
let animal =["собака",]
animal.push("тигр");
animal.push("лев");
animal.pop();
animal.unshift("кот");
animal.pop();
animal.shift();
animal.unshift("кошка");
console.log(animal)
console.log(animal.indexOf("собака"))

let boringAnimals = ["мартышка", "кот", "рыба"]
boringAnimals[1] + boringAnimals[0];
console.log(boringAnimals.join(""));

let BodyPart = ["мозг", "живот", "ноготь"]
let Adjectives = ["тупой", "жирный", "грязный" ]
let Words = ["обезьяны","рыбы","слона"]
let Friends = ["Никита", "Вова","Даник"]
let randomBodyPart = BodyPart[Math.floor(Math.random() *BodyPart.length)]
let randomAdjectives = Adjectives[Math.floor(Math.random() *Adjectives.length)]
let randomWords = Words[Math.floor(Math.random() *Words.length)]
let randomFriends = Friends[Math.floor(Math.random() *Friends.length)]
let calling = [randomFriends,"твой",randomBodyPart,randomAdjectives,"как y ",randomWords, "xa-xa!"].join(" ");
console.log(calling);


let date;
date = [3, 2, 1];
let words;
words = ["больше", "чем"];
let otBet = [3,2 ,1].join(" больше , чем ")
console.log(otBet);

let game = {};
game["value"] = 8;
console.log(game);

//Задание 1
let scores = {
    "Фёдор": 0,
    "Хабиб": 0
  };
  
  // Увеличиваем счёт Фёдора на 1000
  scores["Фёдор"] += 1000;
  
  // Увеличиваем счёт Хабиба на 100
  scores["Хабиб"] += 100;
  
  // Показываем счёт игроков
  console.log(scores);
  // { 'Фёдор': 1000, 'Хабиб': 100 }

//Задание 2
 let fff = {
    "name":"bum",
    "some array": [3,{english:"time", number: 213} ,243]
 };
 console.log(fff["some array"][1]["number"])

 let name ="Дима";
  if ( name === "Арсений"){
  console.log("Привет мне")
  }else if (name === "Таня"){
    console.log("Привет Мама")
  }else if (name ==="Дима"){
    console.log("Привет Папа")
  }else{ 
    console.log("Привет Незнакомка!")
  }
  
for ( let x = 3; x < 10000; x = x *3){
  console.log(x)
}

 let animals = ["Кот ","Рыба ","Лемур ","Комодский варан "]
 for (let a= 0; a<animals.length;a++){
  console.log(animals[a] +"- прекрасное животное")
 }

 let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
 let string = "";
 let length = 6;
 while(string.length<length){
 string += alphabet[Math.floor(Math.random() *alphabet.length)]
 }
 console.log(string);

 let input = "javascript is awesome";
 let output = "";
 for (let i = 0; i < input.length; i++ ){
  if(input[i] === "a"){
    output += "4"
  }else if(input[i] === "e"){
    output += "3"
  }else if(input[i] === "o"){
    output += "0"
  }else if(input[i] === "i"){
    output += "1"
  }else{
    output += input[1]
  }
 }
  console.log(output)


let names;
names = prompt("Привет");
 alert("Пока");

 
 let hamster = confirm("Тебе нравятся хомяки?")
 if (hamster) {
  alert("Круто!")
 } else {
  alert("Не проблема")
 }




 let f =prompt("как вас зовут?");
 alert("Добро пожаловать " + f )




 let letter =confirm("Ты отправил письмо?")
if (letter) {
  alert("Спасибо!")
}else{
  alert("Сейчас же иди на почту!!!")
}




let years =prompt("Подтвердите,что вы совершеннолетний! Укажите ваш возраст")
if (years >17) {
  alert("Вам есть 18 проходите")
}else{
  alert("Вам нету 18 проход запрещен")
}




let mystery = prompt("Два конца,два кольца посередине гвоздик")
if (mystery ==="ножницы" ){
  alert("Ответ верный!")
}else{
  alert("Ответ неверный!")
}




let number =prompt("Угадай число от 1 до 100")
let computer = Math.floor(Math.random() * 100)
if (number === computer){
  alert("Ты угадал")
}else{
  alert("Ты не угадал")
}


let PrintMultipleTimes = function(HowManyTimes, whatDoThis){
    for(let time = 0; time < HowManyTimes; time++)
   console.log(time + "" + whatDoThis)
};
PrintMultipleTimes(3,"^-^");


let FindElement = document.getElementById("body")
console.log(FindElement.innerHTML)
let NewText =prompt("Введите новый заголовок")
FindElement.innerHTML = NewText

let NewElement =prompt("Введите новый заголовок")
$("#body").text(NewElement)
$("body").append("<p>Это новый параграф</p>")

for ( let x = 0; x<3; x++) {
    let hobby = prompt("Назови свои три любимых хобби")
    $("body").append("<p>" + hobby + "</p>")
}


let newHeadingText = prompt("Введите новый заголовок:");
$("#head").text(newHeadingText);

//Добавляет тег на страницу html при помощи jquery
$("body").append("<p>Это новый параграф</p>");
//fadeOut - тест исчезает в течении 3-х секунд. fadeIn - текст повявляется
$("h1").fadeOut(3000).fadeIn(3000);
$("h1").text("текст пропажа").fadeOut(3000)
$("h1").slideUp(1000).slideDown(500)

let friends = ["Стас","Максим","Влад"]
$("h1").text("Мои друзья")
for(let x = 0; x < friends.length; x++){
  $("body").append("<p>" + friends[x] + " best" + "</p>")
  $("p").hide(3000).fadeIn(3000)
}


let counter = 1;

let printMessage = function() {
  console.log("Ты делаешь домашку уже:" + counter + "cек");
  counter++;
};

let intervalid = setInterval(printMessage, 1000);

let direction = 'вправо';
let offset = 0;

$("#head").offset({ left: offset, top: offset });

let moveHeading = function () {
if (direction === 'вправо') {
$("#head").offset({ left: offset });
offset++;
if (offset > 200) {
offset = 0
direction = 'вниз';
}
} else if (direction === 'вниз') {
$("#head").offset({ top: offset });
offset++;
if (offset > 200) {
offset = 200;
direction = 'влево';
}
}else if (direction === 'влево') {
  $("#head").offset({left: offset});
  offset--;
  if(offset< 0){
    offset= 200 
    direction= 'вверх'
  }
}else if (direction === 'вверх') {
$("#head").offset({top: offset});
offset--;
if(offset< 0){
  offset= 200
  direction= 'вправо'
}
}
};

setInterval(moveHeading, 3);


let clickhandler = function (event) {
  console.log("Клик!" + event.pageX + " " +event.pageY)
};
$("h1").click(clickhandler)

$("html").click(function (event){
  $("#head").offset({
left: event.pageX,
top: event.pageY
  });
});
*/

