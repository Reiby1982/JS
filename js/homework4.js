(function() {
	'use strict';
/*
Задание 1
1.1. создать 2 объекта city1 и city2 со следующими свойствами: 
name, population, mayor 
двумя разными способами (первый объект одним способом, второй другим)*/
console.log("Задание 1");
console.log("1.1");
let city1 = {};
city1.name = "City1";
city1.mayor = "Mayor1";
city1.population = 100;


let city2 = {
	name: "City2",
	population: 500,
	mayor: "Mayor2",
	changeName: function (new_name) {
		this.name = new_name;
	}
}
console.log(city1);
console.log(city2);

/*1.2. city1 добавить метод, который позволяет забирать какую-то часть населения 
city2 (и соответственно добавлять к своему)*/
console.log("1.2");
city1 = {
	population: "100",
	get: function(X) {
		 this.population = this.population + X;
		 city2.population= city2.population - X;
	}

};

city1.get(50);
console.log(city1.population);
console.log(city2.population);


/*1.3. Написать функцию (вне этих объектов), которая показывает мэра города 
(в зависимости от объекта, переданного ей в качестве аргумента)*/
console.log("1.3");
city1.mayor = "Mayor1"; // !!! - если не задавать значение заново - underfined. Почему так?

console.log(city1.mayor, city2.mayor);
function Mayor(City) {
	if (City == city1) {
	return city1.mayor;	
	} else 
	return city2.mayor;
}

console.log(Mayor(city1));

console.log("1.3.2");

//Правильнее сделать так
function ShowName(some_city) {
	console.log(some_city.mayor);
}
ShowName(city1);

function ShowName2() {
	console.log(this.mayor);
}

ShowName2.call(city1, ); // Вызов! функции с передачей контекста
ShowName2.apply(city2);

function changeMayor(new_val) {
	this.mayor = new_val;
	console.log(this.mayor)
}
changeMayor.call(city1, "New Name" ); // Вызов функции с передачей контекстаы
changeMayor.apply(city2, ["New_name"]);

// Привязка контекста с помощью bind
var changeCity1 = changeMayor.bind(city1, "New Name"); // функция должна быть создана и иметь this!
var changeCity2 = changeMayor.bind(city1, "New Name"); // функция должна быть создана и иметь this!

changeCity1();
changeCity2();


/*1.4. Создать объект president c методом changeCountryMayor(), благодаря 
которому он сможет менять мэра города (в зависимости от объекта, переданного 
в качестве аргумента)*/
console.log("1.4");
console.log("City1 - ", city1.mayor);
console.log("City2 - ", city2.mayor);

let president = {
	changeCountryMayor: function(City, Mayor) {
		return City.mayor = Mayor; 
	}
};
president.changeCountryMayor(city2, "Mayor1");
president.changeCountryMayor(city1, "Mayor2");

console.log("City1 - ", city1.mayor);
console.log("City2 - ", city2.mayor);



/*Задание 2
Написать функцию, которая на вход принимает строку и подстроку и ищет 
ВСЕ вхождения подстроки в строку*/
console.log("Задача 2");

var str = "sdfsdsdfsgaasdfdf";
var substr = "a";
function searching(str, substr) {
	var position = 0;
	var n = 0;
	while(true) {
		var foundPosition = str.indexOf(substr, position);
		if (foundPosition == -1) break;
		position = foundPosition +1;
		n++;
		console.log(foundPosition);
	}
	return n;
}
console.log(searching(str,substr));
/*
Задание 3 (по рядам, нумерация от окна)
1 ряд: написать функцию getDataFromUser(), которая:
1)получает информацию от пользователя,
2)используя, функцию validateData(data, flag) - ее создает второй ряд, проверяет данные на валидность. 
Пример использования 
validateData(a, 'num') 
validateData(operator, 'operator')
validateData(b, 'num')
validateData(data, flag) возвращает либо true, либо false
В случае, если данные не валидны, пытается получить их до тех пор, пока не получит пригодные данные, 
3)после чего возврящает их в виде массива [+a, operator, +b]
Данная функция сначала получает первое число, потом оператор, потом второе число.
Оператор нельзя начать получать, пока не получено первое валидное число, второе число нельзя начать получать, пока пользователь не введет подходящий оператор 
Операторы могут быть + - */

}());