/*
В js файле создать объект handlers со следующими методами:
startDraw
endDraw
drawing
erase

на canvas повесить следующие обработчики:
'mousedown' - метод handlers - startDraw
'mouseup'- метод handlers - endDraw
'mouseout' - метод handlers - endDraw
'mousemove'- метод handlers - drawing

Проверьте, чтобы методы действительно отрабатывали. 
Во вторник будем делать из этого мини paint. 
Но можете попробовать реализовать его сами до вторника (надо будет почитать про рисование canvas)
*/

(function() {
	'use strict';
let handlers = {
	startDraw: function() {
		console.log("startDraw");
	},
	endDraw: function() {
		console.log("endDraw");
	},
	drawing: function() {
		console.log("drawing");
	},
	erase: function () {
		console.log("erase");
	},
};

let canvas = document.getElementById("canvas");

	canvas.addEventListener('mousedown', handlers.startDraw);
	canvas.addEventListener('mouseup', handlers.endDraw);
	canvas.addEventListener('mouseout', handlers.endDraw);
	canvas.addEventListener('mousemove', handlers.drawing);;


}());
