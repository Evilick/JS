//С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let numb = 0;
while (numb <= 100) {
    let simpleNumb = true;
    for (let i = 2; i < numb; i++) {
        if (numb % i === 0) {
            simpleNumb = false;
            break;
        }
    }
    if (simpleNumb) console.log(numb);
    numb++;
}

// Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice(basket) {
    let BasketPrice = 0;
    for (let prod of basket) {
        BasketPrice += prod.price;
    }
    return BasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket));

//Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.

for (let i = 0; i < 10; console.log(i++)) { }

//Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5

let pyramide = 'x';
for (let i = 0; i < 20; i++) {
    console.log(pyramide);
    pyramide += 'x';
}