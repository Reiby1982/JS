(function (){
'use strict';
console.log("Lesson 4 Модальные окна");
var arr = [2, 5, 6, 'str', '45'];
arr.includes(5); // перебирает массив и ищет в массиве true или false

//Модальное окно Alert
// alert('massage');

console.log("After alert");

//Модальное окно Prompt

// prompt("Title", " ");

// var promptRes = prompt("Enter Smth", " ");
// console.log("promptRes", promptRes, typeof promptRes); // всегда получаем тип строка

// prompt()
 //возвращает то, что ввел пользователь либо null при отмене

// +" " - превращает строку в число
console.log(" ");
console.log("Превращение строки в число");

var str = "12.6 m 78s"

//parseInt
console.log("parseInt", parseInt(str)); //"необязательный парвметр системы исчисления")  // читает первое целое число из строки

//parseFloat() - считает десятичное число
var str2 = "12.6435 m 78s"
console.log("parseFloat", parseFloat(str2));

}());

console.log(" ");
console.log(" Модальное окно confirm");

var confirmRes = confirm("question?"); // возвращает или true или false
console.log(confirmRes);
