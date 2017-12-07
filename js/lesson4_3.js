(function (){
	'use strict';
	console.log("Lesson 4 Объекты");
	// Объекты - как ассоциативные массивы для хранения данных
	var obj = {} // пустой объект
	
	var user = {};
	
	user.login = "user1"; // создаем свойство login со значением user1
	console.log(user);

	console.log(user.login);

	console.log(user.email); // обращение к свойству которого нет  - будет underfined
	user.email = "user1@mail.ru";

	// delete user.login; // удаление свойства 

	console.log(user);

	// in проверяет наличие свойства в объекте
	if("email" in user) {
		console.log(user.email);
	}

	console.log("");
	//обратиться к свойству можно еще через []
	console.log(user.login);
	console.log(user["login"]);

	//обратиться к свойству можно еще через переменную
	var propName = "login";
	console.log(user[propName]);


	/* Литеральный способ создания объектов
	user = {
		имя_свойства: значение,
		имя_свойства2: значение,
		имя_свойства3: значение,
	}
	*/
	let user1 = {
		login: "user2",
		email: "Gopagopa@mail.ru",

	}

	//Хранение по значению и по ссылке
	var size = 9;
	var otherSize = size;
	console.log("size=", size, "otherSize=", otherSize);

	var otherSize = 434;
	console.log("size=", size, "otherSize=", otherSize);


	var horse = {
		size: 'big',
	};

	var poni = horse; // создается взаимосвязь между объектами

	console.log("horse=", horse.size, "poni=", poni.size);

	poni.size = "small";

	console.log("horse=", horse.size, "poni=", poni.size);
	console.log("");

	//Функция внутри объекта - метод объекта
	user = {
		login: "user1",
		introdusing: function() {
			console.log(this.login);
			console.log("this", this);

		},
		changeName: function(new_name){
			this.login = new_name;
			console.log(this.login);

		}
	};
	user.introdusing();






}());

