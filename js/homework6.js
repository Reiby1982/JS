(function() {
	'use strict';
/*
1. События клавиатуры keydown, keyup, keypress
Написать функцию обработчик события так, чтобы вводимая пользователем информация сразу же отображалась в textarea или любом другом месте
<input type="text"> - поле для ввода текста пользователем
<textarea></textarea> - поле для отображения вводимого пользователем текста
*/
	let InputText = document.getElementById('input');
	let OutputText = document.getElementById('text_area');

	InputText.addEventListener('keydown', keydownFunc);

	function keydownFunc(event) {
		OutputText.value += event.key;
	}
/*
2. Написать по одной любой функции-обработчику на следующие события:
DOMContentLoaded
beforeunload
onload на отдельный элемент
*/
console.log("Задача 2")

document.addEventListener('DOMContentLoaded', DOMContentLoadedInfo);

	function DOMContentLoadedInfo(event) {
	console.log("DOM ready");
}

window.addEventListener('beforeunload', onbeforeunload);
function onbeforeunload(event) {
    console.log('beforeunload');
 };


let div = document.getElementById("onload");

div.onload = Onload;
	function Onload() {
		console.log('onload');
	};

}());