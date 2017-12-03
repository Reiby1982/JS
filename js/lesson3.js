// 'use strict';
console.log("Functions Функции");
// функции являются объектами в javaScript
//Именованные функции
console.log("Именованные функции");
/*
function имяФункции (параметр1, параметр2...) { 
	code1; 
	code2;
	return выражение;
}
имяФункции(); - вызов функции
*/

function printFunction() {
	console.log("printFunction", printFunction);
}
printFunction();
console.log(" ");

function helloUser(user_name, arg2) {
	console.log("Hello ", user_name, arg2);
}

helloUser("Вася", "Петя"); //агрумент попадает в функцию
console.log(" ");

function showAllUsers() {
	for (var i = 0; i < arguments.length; i++) {
		console.log("user" + (i+1), arguments[i]); //слияние строки и номера аргумента + аргумент
	}
}
showAllUsers ("Vasya", "Petya", "Dima");
console.log(" ");

//значения по умолчанию
function printUserInfo(name, surname = "фамилия не известна") {
	//surname = surname || "фамилия не известна"; //задается значение по умолчанию
	console.log(name, surname);
}
printUserInfo("Ivan",);



console.log("функция сложения A и B ");

function Summ(a, b) {
	if (checkType(a, b)) {
	console.log(a + b);
	// return a + b;
	}
}
Summ(3, 6);
// var result = Summ("dsfsdf", 6);
// console.log(result);

// Функция проверки чисел 
function checkType(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		console.log("Error");
		return false; //завершает работу функции
	} else console.log("Num");
		return true;
}

// var checkTypeRes =  checkType(5, 6);
// console.log(checkTypeRes);


//Анонимные функции
console.log("");
console.log("Анонимные функции");
/*
var имяПеременной = function  (параметр1, параметр2...) { 
	code1; 
	code2;
	return выражение;
}
*/
var evenNum = function(num) {
	if (num%2 ===0) {
		return "четное";
	} else {
		return "нечетное";
	}
};
console.log(evenNum(8));


// Рекурсия - вызов самой себя
console.log("Рекурсия");
function pow(x, n) {
	if (n !== 1) {
		return x * pow(x, n-1);
	} else {
		return x;
	}
}
console.log(pow(3,5));


console.log("Замыкание")
// Замыкание
/*
;
function имяФункции (аргумент) {
	var имяПеременной;
	function имяФункции2 () {
		имеет доступ и к параметру 1 и к переменной
	}
}
*/
function counter () {
	var num = 0;
	return function () {
		return num++;
	}
}
var count = counter();
console.log (count());
console.log (count());
console.log (count());
console.log (count());
console.log (count());

//Контекст вызова
var user_name  = "john";
function showName() {
	console.log(this.user_name); 
	this.user_name = "new name";
	console.log(this.user_name);
}
showName();

//Самовызывающаяся функция для того, чтобы функции не попадали в window
(function (global) {
	//code
}());