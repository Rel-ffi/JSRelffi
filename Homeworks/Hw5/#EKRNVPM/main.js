
let arr = [];

function RandomValueArr(arr) {
    for (let i = 0; i < 6; i++) {
        arr.push(Math.floor(Math.random() * 100 + 1));
    }
}
// чесно взагалі не знаю як це можна стрілочною функцією зробити:))))
let sumArr = (arr) => {
    let sum = 0;
    for (let arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

RandomValueArr(arr);
console.log(arr);
console.log('Сумма всіх елементів:', sumArr(arr));
