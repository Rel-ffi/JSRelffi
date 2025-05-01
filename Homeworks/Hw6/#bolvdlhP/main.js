
let cards = [
    {cardSuit:'heart', value: 'ace', color:'red'},
    {cardSuit:'diamonds', value: 'ace', color:'red'},
    {cardSuit:'spades', value: 'ace', color:'black'},
    {cardSuit:'clubs', value: 'ace', color:'black'},
    {cardSuit:'heart', value: 'jack', color:'red'},
    {cardSuit:'diamonds', value: 'jack', color:'red'},
    {cardSuit:'spades', value: 'jack', color:'black'},
    {cardSuit:'clubs', value: 'jack', color:'black'},
    {cardSuit:'heart', value: 'queen', color:'red'},
    {cardSuit:'diamonds', value: 'queen', color:'red'},
    {cardSuit:'spades', value: 'queen', color:'black'},
    {cardSuit:'clubs', value: 'queen', color:'black'},
    {cardSuit:'heart', value: 'king', color:'red'},
    {cardSuit:'diamonds', value: 'king', color:'red'},
    {cardSuit:'spades', value: 'king', color:'black'},
    {cardSuit:'clubs', value: 'king', color:'black'},

]

for (let i = 6; i <= 10; i++) {
    cards.push(
        {cardSuit:'heart', value: `${i}`, color:'red'},
        {cardSuit:'diamonds', value: `${i}`, color:'red'},
        {cardSuit:'spades', value: `${i}`, color:'black'},
        {cardSuit:'clubs', value: `${i}`, color:'black'},
    )
}

console.log(cards.find(function (value) {
    return value.value === 'ace';
}));

console.log(cards.filter(function (value) {
    return value.value === '6';
}));

console.log(cards.filter(function (value) {
    return value.color === 'red';
}));

console.log(cards.filter(function (value) {
    return value.cardSuit === 'diamonds';
}));

console.log(cards.filter(function (value) {
    return value.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(value.value);
}));







