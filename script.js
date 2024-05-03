var userInput = +prompt("Введите число:");

if (!isNaN(userInput)) {
    let sum = 0;

    for (let i = 2; i <= userInput; i += 2) {
        sum += i;
    }

    console.log("Сумма всех четных чисел до " + userInput + " равна: " + sum);
} else {
    console.log("Ошибка! Введите число.");
}


