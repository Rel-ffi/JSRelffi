let time = +prompt('Введіть хв від 0 до 59');

if (time <= 15) {
    console.log('В першу частину години')
}
else if (time > 15 && time <= 30) {
    console.log('В другу частину години')
}
else if (time > 30 && time <= 45) {
    console.log('В третю частину години')
}
else if (time > 45 && time <= 59) {
    console.log('В четверту частину години')
}
else {
    console.log('???????????')
}
