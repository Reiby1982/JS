// Родительский класс функций - конструктора

function FuncObjParent() {
    this.name = "FuncObjParent";
    
    this.parentFunc = function(){
        console.log("parentFunc FuncObjParent");
    }
}

function ProtoObjParent() {
       this.name = "ProtoObjParent";
}

ProtoObjParent.prototype.parentFunc = function() {
            console.log("parentFunc ProtoObjParent");
}

// Дочерние функции конструкторы


function FuncObj () {
    FuncObjParent.call(this); // наследование в функциональном стиле
    this.show = function (){
        console.log("show from funcObj");
    }
    
} // точки с запятой не ставим в таком случае


function ProtoObj () {
    
}

ProtoObj.prototype = Object.create(ProtoObjParent.prototype); // наследование в прототипном стиле, но кладем методы из прото, чтобы обращаться напрямую!!!, если убрать, то будет наследовать и свойства. Передаем только то, что в proto



var funcObj = new FuncObj();
var protoObj = new ProtoObj();

console.log("funcObj", funcObj);
console.log("protoObj", protoObj);
//---------------------------------------
funcObj.show = function() {
    console.log(); // создаем метод в функциональном стиле/ пишем имя объекта

};

//funcObj2 = new FuncObj(); // таким образом он не получит метод. Если нужно для всех обектов, но нужно писать в самом конструкторе

ProtoObj.prototype.show = function() {
        console.log(); // создаем метод в прототипном стиле, используя имя функции конструктора
};

console.log(funcObj);
console.log(protoObj);


funcObj.parentFunc();
protoObj.parentFunc();

console.log(protoObj.name)


//funcObj.show();
//protoObj.show();


