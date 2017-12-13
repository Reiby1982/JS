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


let canvas = document.getElementById("canvas");

let handlers = {
	startDraw: function() {
		console.log("начало рисования");
		this.isDrawing = true;
	},
	endDraw: function() {
		console.log("конец рисования");
		this.isDrawing = false;
	},
	drawing: function(event) {
		if (this.isDrawing) {
			console.log("рисование в процессе");

			var context = canvas.getContext('2d'); // задание координатной сетки x и y
			context.beginPath(); // начать рисование
            
            //context.strokeStyle рисование контуром
			// contex.fillStyle() рисование заливкой
			context.fillStyle = document.getElementById('paint_brush_color').value; //рисование контуром
			context.arc(event.offsetX, event.offsetY, 
					document.getElementById('paint_brush_size').value,
					0, Math.PI*2, false);
			context.fill();


		} else {
			return;
		}
	},
	erase: function () {
		console.log("стираиние");
	},
};


	canvas.addEventListener('mousedown', handlers.startDraw);
	canvas.addEventListener('mouseup', handlers.endDraw);
	canvas.addEventListener('mouseout', handlers.endDraw);
	canvas.addEventListener('mousemove', handlers.drawing);

	// // получить координаты мыши 
	// elem.getBoundingClientRect() {
	// 	"top" :;
	// 	'bottom':;
	// }

}());
