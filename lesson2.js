// Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2     ++a  к переменной а добавляет единицу
d = b++; alert(d);           // 1    b++ к переменно b добавляет единицу, но возвращает предыдущее значение, т.е. 1
c = (2+ ++a); alert(c);      // 5    выше мы прибавили к переменной а единицу, сейчас еще раз добавляем единицу и она становится равна 3, ну и 2+3 = 5
d = (2+ b++); alert(d);      // 4   выше мы прибавили к переменной b единицу, сейчас b=2, сейчас опять добавляем единицу, но b++ выводит предыдущее значение, поэтому 2 + 2 = 4
alert(a);                    // 3 т.к. два раза выше добавили по единице
alert(b);                    // 3 т.к. два раза выше добавили по единице
//Почему код даёт именно такие результаты?


//Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
// x  = 5 т.к. оператор *= является сокращенным от (a = a*2), следовательно х = 1 + (2*2) = 5


//Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. 

var a = 1;
var b = 3;
var x = 0
if (a > 0 && b > 0) {
    x = a - b;
    console.log(x);
}
else if (a < 0 && b < 0) {
    x = a * b;
    console.log(x);
}
else if (a > 0 && b < 0 || a < 0 && b > 0) {
    x = a + b;
    console.log(x);
}


//Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

var a = 8;
switch (a) {
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    case 3:
        console.log('3');
        break;
    case 4:
        console.log('4');
        break;
    case 5:
        aconsole.log('5');
        break;
    case 6:
        console.log('6');
        break;
    case 7:
        console.log('7');
        break;
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    case 15:
        console.log('15');
}


//Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
var a = 5;
var b = 6;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div(a, b) {
    return  a / b;
}

function mult(a, b) {
    return  a * b;
}


// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 1:
            return arg1 + arg2;
            break;
        case 2:
            return arg1 - arg2;
            break;
        case 3:
            return arg1 / arg2;
            break;
        case 4:
            return arg1 * arg2;
            break;
    }
}