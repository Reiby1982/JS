(function() {
	'use strict';
    
console.log("");
console.log("Farm ES6 method");
console.log("");

'use strict';

class Farm {
    constructor(name, human_name) { 
        this.name = name;
        this.human = new Human(human_name);
    };
};

class Human {		
		constructor(name) { 
			this.name = name; 
	};
};

class AnimalHotel {		
		constructor() { 
			this.animals = [];
			this.maxCount = 3;
        }
};
  
class AnimalsHotel {
	constructor(name) {
		this.name = name; 
        this.animals = [];
        this.max_count = 3;
    }
    
    addAnimals(animal) {
        if (this.animals.length < this.max_count) {
                this.animals.push(animal);
                console.log(this.animals);
            } else {
                console.log("Нет свободных мест");
        }    	
    }
};

class DomasticAnimal extends Animal {
	constructor(name) {
	super(name);
	};
};


var farm = new Farm("Ферма", "Хозяин"); 
console.log(farm);


var cat = new DomasticAnimal("Кошка"); 
    
var animalHotel = new AnimalHotel();

animalHotel.addAnimals(cat); 
console.log("animalHotel", animalHotel);

var donkey = new DomasticAnimal("Ослина");
animalHotel.addAnimals(donkey); 

console.log("animalHotel", animalHotel);

}());
