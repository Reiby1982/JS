/*Задача 1 (while) 
Задать количество тарелок и количество моющего средства. 
Моющее средство расходуется из расчета 0,5 на одну тарелку. 
В цикле выводить сколько моющего средства осталось после мытья каждой тарелки 
В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.*/

console.log("Задача 1");
let varPlate = 5;
let varDetergent = 4;
console.log("Тарелок, шт = ", varPlate);
console.log("Моющего средства, мл = ", varDetergent);
console.log(" ");

while(varPlate && varDetergent) {
	varPlate--;
	varDetergent= varDetergent-0.5;
	console.log("Тарелок осталось, шт",varPlate);
	console.log("Моющего средства осталось, мл",varDetergent);
}
console.log(" ");
if (varDetergent===0) {
	console.log("ОТВЕТ: Тарелок осталось, шт",varPlate);
} else { 
	console.log("ОТВЕТ: Моющего средства осталось, мл",varDetergent);
}


/*Задача 2 
Создать таблицу соответствия между весом в фунтах и весом в килограммах для значений от 1 до 10*/
console.log(" ");
console.log("Задача 2");

let varFt = 1;

for (;varFt<11;varFt++) {
	let varkG = varFt * 0.453592;
	console.log(varFt, 'фт =' , varkG, 'кг');
}

/*Задание 3
Посмотреть, как работают методы для работы с массивами: join, slice, indexOf/lastIndexOf, concat.
Разобрать по 1му примену на каждый из них. В субботу обсудим*/
console.log(" ");
console.log("Задача 3");
console.log(" ");
console.log("метод join");
var arrJoin = ['Маша', 'Петя', 'Марина', 'Василий'];
var strJoin = arrJoin.join(', ');
console.log(arrJoin);
console.log(strJoin);

console.log(" ");
console.log("метод slice");
var arrSlice = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть']
var arrSlice2 = arrSlice.slice(0, 3); // элементы 0, 1, 2 (не включая 3)
console.log('исходный массив', arrSlice);
console.log('копируемый массив',arrSlice2);

console.log(" ");
console.log("метод indexOf/lastIndexOf");

console.log(" ");
console.log("метод concat");
var arrConcat = [1, 2, 3];
var arrConcat2 = arrConcat.concat('четыре', 'пять');
console.log('исходный массив',arrConcat);
console.log('новый массив',arrConcat2);

/*Задача 4
Есть три вершины. Координаты вершин (x1, x2), (y1, y2), (z1, z2) заданы как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.
В решении использовать только математические и логические операторы. Результат в консоль.
Обязательное условие: все вычисления производить только с целыми числами. Любой переход в дробные числа запрещен!*/

console.log(" ");
console.log("Задача 4");
let Xa=0, Ya = 0, Xb = 5, Yb = 3, Xc = 5, Yc = 0;
console.log("Координаты точки A",Xa, Ya);  
console.log("Координаты точки B",Xb, Yb);  
console.log("Координаты точки C",Xc, Yc);  
//  квадраты сторон по формуле (X2-X1)²+(Y2-Y1)²
let ab = (Xb - Xa) * (Xb - Xa) + (Yb - Ya) * (Yb - Ya);
let bc = (Xb - Xc) * (Xb - Xc) + (Yb - Yc) * (Yb - Yc);
let ac = (Xc - Xa) * (Xc - Xa) + (Yc - Ya) * (Yc - Ya);
console.log("Сторона AB² равна",ab);  
console.log("Сторона BC² равна",bc);  
console.log("Сторона AC² равна",ac);
if (ab==bc + ac || bc==ab + ac || ac == bc + ab){
    console.log("Треугольник   прямоугольный");
} else {
    console.log("Треугольник  не прямоугольный");
}


/*Задача 5
Создать массив из чисел. Выполнить сортировку массива по возрастанию методом пузырька. Запрещено использовать стандартные методы.*/
console.log(" ");
console.log("Задача 5");
var arrBubble = [3, 4, 23, 5634, 32, 12, 10, 11, 7, 34];
console.log("Заданный массив", arrBubble);
let varN = arrBubble.length;
console.log("Длина массива", varN);

let i, j, temp;

for (i = 0; i < varN - 1; i++) {
    for (j = 0; j < varN - i; j++) {
 
        if( arrBubble[j] > arrBubble[j+1] ){
            temp = arrBubble[j];
            arrBubble[j] = arrBubble[j+1];
            arrBubble[j+1] = temp;
        }
    }
}

console.log (arrBubble);
document.write(arrBubble);



