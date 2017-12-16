'use strict'; // должен быть обязательно

// Создание класса
class ClassName {
    constructor(name) { //отрабатывает при создании объекта, вызывать не надо
        this.name = name;
        this.val = null;
        // все свойства должны быть описаны в конструкторе
    }
    showInfo() { // далее идут методы
        console.log("Show Info",this);
    }
    //для реализации сеттера
    set setGetVal(val){
        this.val = val;
    }
    //для реализации  геттера
    get setGetVal() {
        return this.val;
    }
    // для создания статитического метода
    static staticMethodName(val) { // не работает с this, доступен для вызова без создания объекта имяКласса.имяСтатическогометода
        console.log("Staticmethod", val);
    }
}
    


let obj = new ClassName("obj name");
obj.showInfo();
obj.setGetVal = "12"; // сеттер
console.log("obj", obj.setGetVal); // геттер
//в объект, а методы в свойства

ClassName.staticMethodName(12);

class Someclass extends ClassName { // дочерний класс наследует свойства родителя
    constructor(name) {
        super(name); // вызов конструктора родительского
        this.id = 9;
    }
}
var someClass = new Someclass("someClass");
console.log(someClass)


