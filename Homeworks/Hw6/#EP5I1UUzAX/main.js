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

console.log(cards.reduce((previousValue, currentValue) => {
    if (currentValue.cardSuit === 'spades') {
        previousValue[0].spades.push(currentValue)
    } else if (currentValue.cardSuit === 'heart') {
        previousValue[0].hearts.push(currentValue)
    } else if (currentValue.cardSuit === 'diamonds') {
        previousValue[0].diamonds.push(currentValue)
    } else if (currentValue.cardSuit === 'clubs') {
        previousValue[0].clubs.push(currentValue)
    }
    return previousValue;
}, [{spades: [], diamonds: [], hearts: [], clubs: []}]));