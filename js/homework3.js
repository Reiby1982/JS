/*Задача 1
Написать функцию calc(a, b, operator), которая в зависимости от оператора будет 
складывать, умножать, вычитать или делить. 
Не забывайте про проверку типа введенных данных, и про деление на 0 (на 0 делить нельзя)
*/
console.log("");
console.log("Задача 1");
// let a = 4, b = 1, operator = "/";
// console.log("a =", a, "b =", b, "Operator", operator);

// Функция проверки чисел 
function checkType(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Error");
        return false; 
    } else return true;
}
// Функция проверки операторы 
function checkTypeOperator(operator) {
    if (typeof operator === "string") {
        console.log("true");
        return true; 
    } else return false;
}
//Функции операторов
function Summ(a, b) {
    if (checkType(a, b)) {
    console.log(a + b);
    return a + b;
}
}
function Subtraction(a, b) {
    if (checkType(a, b)) {
    console.log(a - b);
    return a - b;
}
}
function Multiplication(a, b) {
    if (checkType(a, b)) {
    console.log(a * b);
    return a * b;
}
}
function Division(a, b) {
    if (checkType(a, b)) {
    console.log(a / b);
    return a / b;
}
}

function calc(a, b, operator) {
    if (checkTypeOperator(operator)) {
        switch(operator) {
            case "+":
            Summ(a, b);
            break; 
            case "-":
            Subtraction(a, b);
            break;
            case "*":
            Multiplication(a, b);
            break;
            case "/":
            if (b==0) {
            console.log("Товарищ, не дели на 0!")
            } else {
            Division(a, b);
            break; 
            };
        break;
        }

    } else {
    console.log("Введите корректные данные")
    }
}


let res = calc(10, 5, "/");

    
/*Задача 2
 Дано целое число n. Вычислите сумму его цифр.
  Использовать только рекурсию.*/
console.log("");
console.log("Задача 2");
let N;
function recursion(N) {
    if (N<10) {
       return N; 
    }
    else {
      return N%10 + Math.floor (recursion(N/10));   
    }
}

console.log(recursion(1234567));

/*Задача 3.
(на замыкание)
Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает
переданное число на указанный при карировании шаг.*/
console.log("");
console.log("Задача 3");
   let x = 5, y=4;

    function curry(x) {
        return function (y) {
            return (x + y);
        };
    }
    
var inc = curry(1);
console.log(inc(5)); // 6
 
var dec = curry(-1);
console.log(dec(3)); // 2
    

