'use strict';

class FieldModel {
	constructor: function() {
		this.start = [0, 0]; 
		this.end = [0, 0];
	};

	set start(start_coord) {
		this.start = start_coord;
	};

	set end(end_coord) {
		this.end = end_coord;
	};
	
};