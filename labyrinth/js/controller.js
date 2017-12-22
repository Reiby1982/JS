'use strict';

class FieldController {
	constructor() {
		this.img = 'maze'; //пишем просто имя картинки
		this.canvContext = null;

		this.fieldModel = new FieldModel(); //пользуемся методом из модел.js

	};

	initCanvasContext(canvasId, context) {
		this.canvas = document.getElementById(canvasId);
		this.canvContext = this.canvas.getContext(context);
	}

	generate() {
		let fieldImg = document.getElementsByTagName('img')[0];
		this.canvas.height = '642';
		this.canvas.width = '642';
		this.canvContext.drawImage(fieldImg, 0, 0); //координаты левого верха в канвасе

	};

	getStart() {
		this.start_coord = [12, 0] //получили каким то образом координаты
		field.fieldModel.start(this.start_coord) = []; 
	}
};


let field = new FieldController();
field.initCanvasContext('gameField', '2d');
field.generate();
