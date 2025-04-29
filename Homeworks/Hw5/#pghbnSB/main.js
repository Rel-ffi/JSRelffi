
let arr = [];

function RandomValueArr(arr) {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100 + 1));
    }
}

let MinValueArr = (arr) => Math.min(...arr);

RandomValueArr(arr);
console.log(arr);
console.log('Мінімальне число:', MinValueArr(arr));