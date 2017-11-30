// Массивы 
'use strict';
console.log("arrays Массивы");

// Массивы - объеты для хранения пронумерованных значений

var arrName = [];

var pictures = ['forest', 'sky', 'ocean'];
// Элементы начинаются с 0
console.log('pictures', pictures);
var firstElem = pictures[0];
var secondElem = pictures[1];
var thirdElem = pictures[2];

console.log(firstElem, secondElem, thirdElem);

//Замена элементов массива
pictures[0] = "new picture";
pictures[3] = "new elem";

console.log('pictures', pictures);

//Длина массива
var picturesLength = pictures.length;
console.log('picturesLength = ', picturesLength);
//Номер последнего элемента + 1

//Удалеие последнего элемента массива
var lastElem = pictures.pop();

//Добавление нового элемента в конец массива
pictures.push('new elem2');

console.log('pictures', pictures);

pictures.shift(); //удаление первого элемента массива
pictures.unshift('new first elem'); // Добавление первого элемента массива
//Работают дольше чем удаление последнего элемента

var str = 'val1, val2, val3';
var arrFromStr = str.split(', '); //превращение строки в массив, обязательно пробел
console.log('arrFromStr', arrFromStr)


var pictures = ['forest', 'sky', 'ocean'];
// pictures.splice(index[N, delCount, elem1...elemN]); - удаляет элементы начиная с указанного
// и с удаленных массивов создает новый массив
             //номер элемента, количество удаляемых элементов

console.log(pictures.splice(4, 0, "elem"));
// если указываем новое значение, то он вставит на место выврезанного

console.log("Изменение порядка  массива");
//
var numArr = [1, 2, 3];
numArr.reverse();
console.log(numArr);
console.log(" ");

console.log("Многомерные массивы");
var matrix = [
			[1, 2, 3],
			[3, 4, 5],
			[6, 7, 8],
			];
var matrix2 = [
			[1, 2, 3],
			[3, 4, 5],
			[6, 7, 8],
			];
console.log(matrix + matrix2);
console.log(" ");

console.log("Ветвление");
//Логические опреторы
// || - опреатор "или"
// && - оператоор "и"
// ! - ореатор "не""

var x = 8;
var y = 2;
(x<y)||(x===y)

/* if (условие) {если true  - то выполнится code1;}
				else {code2;}*/
if (x==8) {
	let z=0;
	console.log(z);
}
else if (x===7) {
	z=x+y;
}
else if (x=444) {
	z=x*y;
}


console.log(" ");
console.log("Оператор выбора Switch");
//Переключатель
/*switch(x) {
	case val1: //code;
	case val2: //cade2;
	case 3,
	case 4: //code;
	[default: //cade;]
}*/

var str1 = "string";
switch(str1) {
	case "123":
			console.log("1234");
			break; //Обязательно нужен прерыватель, иначе выполнит все условия
	case "string":
			console.log("string");
			break;
	case "not str":
			console.log("not string");
			break;
	default:
			console.log("default");
			break;
}

console.log(" ");
console.log("Циклы");

var yearsTime;
var currentDate = new Date();
var currentMonth = currentDate.getMonth();

if ((currentMonth <= 1) || (currentMonth === 11)) {
	yearsTime = "winter";
} else if ((currentMonth<=4) && (currentMonth>=2)) {
	yearsTime = "spring";
} else if ((currentMonth<=7) && (currentMonth>=5)) {
	yearsTime = "summer";
} else {
	yearsTime = "autem"
}
console.log(yearsTime);

/*switch(currentMonth) {
	case (currentMonth <= 1) || (currentMonth === 11):
} сделать дома */

console.log(" ");
console.log("Циклический оператор While с предусловием");

//while (условие ){
	//code;
	//while условие = true
//}

var picturesNew = 5;

while (picturesNew) {
	picturesNew--;
		console.log("picturesNew", picturesNew);
}

console.log(" ");
console.log("Циклический оператор While с постусловием");

do {
	console.log("iter")
} while(0);
// пРИ ТАКОМ УСЛОВИИ ЦИКЛ ВЫПОЛНИТСЯ ДАЖЕ ПРИ НЕПРАВИЛЬНЫХ ДАННЫХ

console.log(" ");
var picturesNew2 = 5;

do {
	picturesNew2--;
	console.log("picturesNew2", picturesNew2);
} while(picturesNew2);


var arr = [1, 2, 3, 4, 5];
var i = 0;
while (i<arr.length) {
	console.log(arr[i]);
	i++;
}

console.log(" ");
console.log("Циклический оператор For");
console.log(" ");

/*
for (start; condition; step) {
	//code;
	//whole condition == true
}
*/
for (var j=0; j<arr.length; j++) {
	console.log(arr[j] +=2)
}
console.log(arr);

/*Задача  на дом 
задать количество посууды и моющего средства
var tar = 25;
var fairy = 34;
0.5 fairy - 1 tar;
while
выводить сколько осталось средства после каждого мытья
в конце остаток тарелок или моющегося средства
console.log(fairy||tar)*/