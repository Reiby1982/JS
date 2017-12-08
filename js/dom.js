(function() {
	'use strict';

	var div = document.getElementById('div'); // поиск элемента по id
	console.log("div", div);
	
	// div.someValue = true;

	var divs = document.getElementsByTagName("div"); //поиск по тегу, результат в виде массива
	console.log(divs);

	var divByClassName = document.getElementsByClassName("div-class"); //поиск по имени класса 
	console.log(divByClassName);
	
	// Поиск по селектору CSS
	var querySelector = document.querySelector("ul"); // имя класса с точкой вернет один элемент

	var querySelectorAll = document.querySelectorAll("li a"); // имя класса с точкой, вернет все элементы

	// Поиск дочерних элементов
	var divChildren = document.getElementById('div').children
	console.log(divChildren);

	// div.remove(); //удаление эоемента
	
	div.hasAttribute("id"); //проверка наличия атрибута
	console.log(div.hasAttribute("id"));

	div.setAttribute("id", "div id2") // изменение атрибута

	div.getAttribute("id");   //получает атрибут
	div.removeAttribute("id"); //удаляет атрибут

	div.style.backgroundColor = "red"; // изменяет стили для динамического изменения

	// div.classlist.add("css_class_Name") // добавление класса, если он уже есть - ничего не произойдет
	// div.classlist.remove("css_class_Name") // удаление класса
	// div.classlist.toggle("css_class_Name") // добавит новый класс если класса нет, удалит сущществующий, класс уже одолжен быть описан в css!!!

	div.innerHTML = "<p>TEXT</p>"; // можно вставить текст в обхект

	//созднание элемента
	var pElem = document.createElement("img");
	pElem.setAttribute("src","alt");
	div.appandChild(pElem);
}());