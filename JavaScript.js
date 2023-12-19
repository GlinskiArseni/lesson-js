/*
var animals =["собака",]
animals.push("тигр");
animals.push("лев");
animals.pop();
animals.unshift("кот");
animals.pop();
animals.shift();
animals.unshift("кошка");
console.log(animals)
console.log(animals.indexOf("собака"))

var boringAnimals = ["мартышка ", "кот ", "рыба"]
boringAnimals[0]+" "+boringAnimals[1]
console.log(boringAnimals.join(""));

var randomBodyPart = ["мозг", "живот", "ноготь"]
var randomAdjectives = ["тупой", "жирный", "грязный" ]
var randomWords = ["обезьяны","рыбы","слона"]
var randomFriends = ["Никита", "Вова","Даник"]
var randomBodyPart = randomBodyPart[Math.floor(Math.random() *randomBodyPart.length)]
var randomAdjectives = randomAdjectives[Math.floor(Math.random() *randomAdjectives.length)]
var randomWords = randomWords[Math.floor(Math.random() *randomWords.length)]
var randomFriends = randomFriends[Math.floor(Math.random() *randomFriends.length)]
var randominsult = [randomFriends,"твой",randomBodyPart,randomAdjectives,"как y ",randomWords, "xa-xa!"].join(" ");
console.log(randominsult);


var number = [3,2,1]
var words = ["больше","чем"]
var otBet = [3,2 ,1].join(" больше , чем ")
console.log(otBet);

var mygame = {};
mygame["value"] = 8;
console.log(mygame);

//Задание 1
var scores = {
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
  var fff = {
    "name":"kgehg",
    "some array": [3,{pursore:"dsgfd", numder: 213} ,243]
 };
 console.log(fff["some array"][1]["numder"])

 var name ="Дима";
  if ( name === "Арсений"){
  console.log("Привет мне")
  }else if (name === "Таня"){
    console.log("Привет Мама")
  }else if (name ==="Дима"){
    console.log("Привет Папа")
  }else{ 
    console.log("Привет Незнакомка!")
  }
  
for ( var x = 3; x < 10000; x = x *3){
  console.log(x)
}

 var animals = ["Кот ","Рыба ","Лемур ","Комодский варан "]
 for (var a= 0; a<animals.length;a++){
  console.log(animals[a] +"- прекрасное животное")
 }

 var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
 var randomstring = "";
 var stringlenght = 6;
 while(randomstring.length<stringlenght){
 randomstring += alphabet[Math.floor(Math.random() *alphabet.length)]
 };
 console.log(randomstring);

 var input = "javascript is awesome";
 var output = "";
 for (var i = 0; i < input.length; i++ ){
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
  */
/*
 var name = prompt("Привет");
 alert("Пока");

 
 var likehamster = confirm("Тебе нравятся хомяки?")
 if (likehamster) {
  alert("Круто!")
 } else {
  alert("Не проблема")
 }
 */

 /*
 задание 1
 var f =prompt("как вас зовут?");
 alert("Добро пожаловать " + f )
 */

 /*
 задание 2
 var picmo =confirm("Ты отправил письмо?")
if (picmo) {
  alert("Спасибо!")
}else{
  alert("Сейчас же иди на почту!!!")
}
*/

/*
 задание 3
var years =prompt("Подтвердите,что вы совершеннолетний! Укажите ваш возраст")
if (years >17) {
  alert("Вам есть 18 проходите")
}else{
  alert("Вам нету 18 проход запрещен")
}
*/

/*
Задание 4
var zagadka = prompt("Два конца,два кольца посередине гвоздик")
if (zagadka =="ножницы" ){
  alert("Ответ верный!")
}else{
  alert("Ответ неверный!")
}
*/

/*
задание5
var number =prompt("Угадай число от 1 до 100")
var komp = Math.floor(Math.random() * 100)
if (number ==komp){
  alert("Ты угадал")
}else{
  alert("Ты не угадал")
}
*/