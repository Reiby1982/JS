(function() {
	'use strict';
/*Создать объект slider, в нем будут два метода:
1. init : получение элемента (по id), в который и будут вставляться слайды
2. add: добавление картинок в слайдер ( метод на вход принимает путь до картинки и alt, создает img, добавляет необходимые атрибуты и классы, и добавляет созданный элемент в элемент, который получили в методе init )
Внутри объекта пользуйтесь this*/

let Elem;
let slider = {
	init: function(id) {
			return Elem = document.getElementById(id);
			},
	add: function(scr, alt) {
				this.Elem = document.createElement("img");
				this.Elem.setAttribute("scr", "alt")
	}
}
slider.init("Homework1");
console.log(Elem);
slider.add("img/1.jpg", "img");


}());