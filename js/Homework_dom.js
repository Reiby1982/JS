(function() {
	'use strict';
/*Создать объект slider, в нем будут два метода:
1. init : получение элемента (по id), в который и будут вставляться слайды
2. add: добавление картинок в слайдер ( метод на вход принимает путь до картинки и alt, создает img, добавляет необходимые атрибуты и классы, и добавляет созданный элемент в элемент, который получили в методе init )
Внутри объекта пользуйтесь this*/

let Elem;
let slider = {
	init: function(id) {
			this.elem = document.getElementById(id); //создаем свойство, которое потом используем
			},
	add: function(url, alt) {
				var img = document.createElement("img");
				img.setAttribute("src",url);
				img.setAttribute("alt",alt);// имя и значение
				this.elem.appendChild(img);//добавляем созданный элемент в найденный контейнер
				img.style.height = "100px";
				// this.Elem.className+="";
				// this.Elem.classList.add();
	}
};
slider.init("slider");
slider.add("img/1.jpg", "alt txt");
slider.add("", "alt txt ");
slider.add("", "alt2 txt ");
slider.add("", "alt3 txt ");


// Создание формы. Урок 6
// Родитель для формы
var formContainer = document.getElementById("form");// нашел элемент и записал в переменную
// формы
var form = document.createElement("form");
	form.setAttribute("id", "form id");
	form.setAttribute("action", "#");
	form.setAttribute("method", "post");
// input 
var input1 = document.createElement("input");
	input1.setAttribute("type", "text");
	input1.setAttribute("required", true);
	// input1.setAttribute("id", "input_id"); // имя атрибута и его значение

var input2 = document.createElement("input");
	input2.setAttribute("type", "text");
	input2.setAttribute("required", true);

//Checkbox
var check = document.createElement("input");
	check.setAttribute("type", "checkbox");
	check.cheked = false;
//button
var btn = document.createElement("button");
	btn.setAttribute("value", "btn");

// добавление элементов в форму
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(check);
form.appendChild(btn);

//добавление формы в контейнер
formContainer.appendChild(form);

// Получение значений от пользователя
var input_val = document.getElementById("input_id").value;
console.log("input_val", input_val);

//События, чтобы отловиь событие нужно на него повесить обработчик событий 
var click = document.getElementById("click");


click.addEventListener("click", showClickElem);// имя события мыши contexmenu | dblclick | mousedown кнопка нажата 
// | mouseup кнопка отпущена| mouseover | mouseout | mousemove


function showClickElem(){
	console.log("click", document.getElementById("input_id").value);
}

// Чтобы удалить обработчик
// click.removeEventListener("click", showClickElem);

//Двойной щелчек
click.addEventListener("dblclick", dblClickInfo);
	function dblClickInfo(event) {
	event.preventDefault(); //Отменяет события по умолчанию (двойной щелчок - выделение текста), события ФОРМЫ, не дают отправить
	console.log("dblclick", this);
}

// document.getElementById("mousemove").addEventListener("mousemove", mouseMoveInfo);
// 	function mouseMoveInfo(event) {
// 	console.log("mouseMoveInfo", event.clientX, event.clientY);
// }



}());