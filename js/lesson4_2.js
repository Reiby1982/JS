(function (){
'use strict';
console.log("Lesson 4 Строки");

var str = "String";
str = "Str 'fdggfd!' ing";
str = "Str with \\";
console.log(str);


// методы и свойства строк
// 1 Длина строки stringName.length
console.log("");
str = " 23\\"
console.log("длина строки str = ", str.length);


// 2 stringName.charAt(index) - доступ к символам строки по его индексу, нумерация с нуля
str = "String";
console.log(str.charAt(3));
console.log(str[4]);

//3 stringName.indexOf(value, start); - показывает на какой позиции находится  ближайший символ в строке
// возвращает -1 если не находит ничего
console.log(str.indexOf("t",3));

//4 stringName.toUpperCase(); - перевод в верхний регистр
//5 stringName.toLowerCase();- перевод в нижний регистр
console.log(str.toUpperCase());
console.log(str[3].toUpperCase());

//6 взятие подстроки из исходной строки
// 6_1 stringName.substr(start_index [, length]); - вернет строку из length начиная со start
str = "String";
console.log(str.substr (2,3));


// 6_2 stringName.substring(start [, end]); - вернет строку с начало до куонца end не включая end

// 6_3 stringName.slise(start [, end]); - вернет строку с начало до куонца end не включая end


// 7 сравнение строк
// stringName.localeCompare(strForCompare [, locales, options])
str = "String";
 var str1 = "Sng";

console.log(str.localeCompare(str1));
// возвращает либо 1 если сравниваемая строка больше, 0 - если одна строка равна другой, и -1  - если меньше




}());

