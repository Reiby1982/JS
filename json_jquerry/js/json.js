(function() {
	'use strict';
// JSON формат
    // Текстовый формат обмена данными
    // Удобен для отправки данных на сервер
   
    // можно передавать объекты массивы, строки в " " (двойные кавычки), числа, true false и null
    
    // JSON.parse - читает объеты из строки формата JSON
    // JSON.stringify - превращает объекты в json строку
    
    
  //  '{"name": "Ivan"}'
  // превратит в и обратно
  // { name: Ivan}
 
    
    // JSON.parse(str[, reviver]) - первый аргумент строка, второй аргумент функция, которая может обработать значени  и выдать ее вида function {key, value}
    
    var jsonStr = '{"name": "Ivan"}';
    var res = JSON.parse(jsonStr);
    console.log(res);
    


}());
