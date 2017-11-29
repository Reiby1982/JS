/*Задача 1
Задать высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь.
Узнайте, что больше: ширина или высота и выведите информацию об этом в консоль.*/

console.log("");
console.log("Задача 1");
let vara = 3, varb = 5, varc = 4;
console.log("a =",vara,"b =", varb,"c =", varc);
let varS = 2 * (vara * varb + varb * varc + vara * varc);
console.log("Площадь параллелепипеда равна", varS);

/*Задача 2
На садовом участке площадью 10 соток , разбили грядки 15 на 25 метров. Сколько м2 осталось незанято?*/

console.log("");
console.log("Задача 2");
let varSgarden = 1000, varSgrd = 15*25;
console.log("Площадь участка равна, м2", varSgarden,);
console.log("Площадь одной грядки равна, м2", varSgrd);
console.log("Площадь незанятой земли равна, м2", varSgarden%varSgrd);

/*Задача 3
Найдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.*/
console.log("");
console.log("Задача 3");
let varCircleBig = 15 * 100, varCircleSmall = 600;
console.log("Площадь большого кольца равна, см2", varCircleBig);
console.log("Площадь малого кольца равна, см2", varCircleSmall);
console.log("Площадь оставшейся части равна, см2", varCircleBig - varCircleSmall);


/*Задача 4
Задать 2 целочисленные переменные,
если остаток от деления меньше или равен 4 ->
вывести в консоль их сумму,
иначе вывести разницу*/
console.log("");
console.log("Задача 4");
let varX = 13353445, varY = 4,varres = 0;
console.log("Переменная X равна", varX);
console.log("Переменная Y равна", varY);
varres = varX % varY <= 4 ? varres = varX + varY : varres = varX - varY;
console.log("Результат", varres);