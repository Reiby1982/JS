console.log("Farm prototipe method");
console.log("");


function Farm(name, human_name) { 
        this.name = name;
        this.human = new Human(human_name);
};

function Human(name) {
    this.name = name;
};

function AnimalHotel() {
    this.animals = []; 
    this.max_count = 3;   
};
//Метод через prototype
AnimalHotel.prototype.addAnimals = function(animal){ 
    if (this.animals.length < this.max_count) {
            this.animals.push(animal);
            console.log(this.animals);
    } else {
           console.log("Нет свободных мест");
            }
    };

function Animal(name) {
    this.name = null; // родительский класс
}

function DomasticAnimal(name) {
    this.name = name;
    }
DomasticAnimal.prototype = Object.create(Animal);




var farm = new Farm("Ферма", "Хозяин"); // через new мы из функции конструктора создаем объект
console.log(farm);

//создаем объект животное
var cat = new DomasticAnimal("Кошка"); // создали объект кошка
var animalHotel = new AnimalHotel();

animalHotel.addAnimals(cat); // добавили в отелькошку
console.log("animalHotel", animalHotel);

var donkey = new DomasticAnimal("Ослина");
animalHotel.addAnimals(donkey); // добавили в отель осла
console.log("animalHotel", animalHotel);





