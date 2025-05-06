Array.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.filter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

let numbers = [11, 22, 33, 11, 55, 22, 11, 66, 22, 55];

numbers.forEach(function (value, index) {
    console.log(`index: ${index}, value: ${value}`);
});

console.log(numbers.filter(function (value) {
    return value === 11 || value === 22;
}));
