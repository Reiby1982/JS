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
    
    var jsonStr = '{"name": "Ivan", "age": "24"}';
    var res = JSON.parse(jsonStr);
    console.log(res);
    
    // reviver
    var jsonStr = '{"name": "Ivan", "login": "user"}';
    var obj = JSON.parse(jsonStr, function(key, value) {
        if(key === "login") {
            return "new login"
            } else {
                return value;
            }
    });
    console.log(obj);

//   JSON.stringify(data[, replacer, space])
// преобразовывает в строку JSON
    
    var data = {
        name: "Oleg"
    };
    data = 4;
    data = true;
    data = "Str";
    data = [45, 12, 23];

    var jsonRes = JSON.stringify(data);
    console.log(jsonRes)
    
    data = {
        name: "Oleg",
        login: "user",
    },
    
    jsonRes = JSON.stringify(data, ["login", "name"]); // указывает порядок и что нужно выводить если не массив
    console.log(jsonRes);
   
 // можно с функцией как в прошлом варианте
    
    data = {
        name: "Oleg",
        login: "user",
    },    
    jsonRes = JSON.stringify(data, function(key, value){
        data.new = 56; //добавляет новое значение
        if(key === "login") {
            return "Change login"
            } else {
                return value;
            }
    });
    console.log(jsonRes);
    
    //третий аргумент space
        data = {
        name: undefined, // если undefined - то проигнорируется
        login: "user",
    },    
    jsonRes = JSON.stringify(data, function(key, value){
        data.new = 56; //добавляет новое значение
        if(key === "login") {
            return "Change login"
            } else {
                return value;
            }
    }, "space");
    console.log(jsonRes);
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}());
