// ссылка на __proto__

var animals = {
    run: function() {
        console.log("Run");
    },
    name: "animal",
}

var domastic = {
    sleep: function() {
        console.log("Sleep at home");
    }
}

domastic.__proto__ = animals; // добывили ссылку на объект animals и добавили все свойства
// animals - прототип для domestic
// domestic прототипно наследуется от animals
domastic.run(); // сначали ищет в начальном и потом пойдет в анималс
console.log(domastic);

//перебрать все свойства объекта
console.log("");
for (var key in domastic){
    if (domastic.hasOwnProperty(key)) {
       console.log("domastic has prop", key); 
    } else {
        console.log("domastic has not prop", key);
    }
    console.log(key);
}

//obj.hasOwnProperty(property); вернет true или false

console.log("");
// animals.toString(); встроенный метод, чтобы их не было надо создавать объект без свойств и методов
animals = Object.create(null);
animals.eat = function(){}; // добавляем свойства
console.log("animals", animals);
// такие объекты нужны только для хранения данных

// СОЗДАНИЕ КЛАССОВ С ИСПОЛЬЗОВАНИЕМ ПРОТОТИПОВ
//1. создать функцию конструкор ТОЛЬКО со свойствами
//2. Необходимые методы описываются в прототипе

console.log("Прототипы");

function Car(price) {
    this.price = price;
}
// все методы описываются в прототипе
Car.prototype.move = function(){
    console.log("Move");
}
//this._color условно приватный метод, который трогать не надо

var  car = new Car(300);
car.move(); // объект использует этот метож
console.log(car);






//НАСЛЕДОВАНИЕ
console.log("Наследование");

function LittleCar() {
    
}

LittleCar.prototype = Object.create(Car);
LittleCar.prototype.sale = function(){
    console.log("Sale");
}
var littleCar = new LittleCar(1234);
littleCar.prototype.move();


//переопределить метод родителя
LittleCar.prototype.move = function(){
    Car.prototype.move.apply(this, arg);// вызов метода родительского класса внутри дочернего
}

