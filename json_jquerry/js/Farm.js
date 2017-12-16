function Farm(name, human_name) { // функция конструктор
        this.name = name; // публичное свойство
        this.human = new Human(human_name);
}
function Human(name) {
    this.name = name;

}
function AnimalHotel() {
    this.animals = [];  //2
    this.max_count = 3;      //3
        this.addAnimals = function(animal){ //1
            if (this.animals.length < this.max_count) {
                this.animals.push(animal);
                console.log(this.animals);
               } else {
                   console.log("Нет свободных мест");
               }
    }
}

function Animal(name) {
    this.name = null; // родитеельский класс
}
function DomasticAnimal(name) {
    Animal.call(this); // наследование свойств от родительских свойств
    this.name = name;
    function NewClass() {
        //приватный вспомогательный класс
    }
    var newClass = new NewClass(); //там же создаем объект и пользуемся внутри
}




var farm = new Farm("Ферма", "Human"); // через new мы из функции конструктора создаем объект
console.log(farm);

//создаем объект животное
var cat = new DomasticAnimal("Кошка"); // создали объект кошка
var animalHotel = new AnimalHotel();

animalHotel.addAnimals(cat); // добавили в отелькошку
console.log("animalHotel", animalHotel);

var donkey = new DomasticAnimal("Ослина");
animalHotel.addAnimals(donkey); // добавили в отель осла
console.log("animalHotel", animalHotel);






