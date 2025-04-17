let day = +prompt('Введіть день від 1 до 31');

if (day >= 1 && day <= 10) {
    console.log('В першу декаду');
}
else if (day >= 11 && day <= 20) {
    console.log('В другу декаду');
}
else if (day >= 21 && day <= 31) {
    console.log('В третю декаду');
}
else {
    console.log('?????????????');
}

