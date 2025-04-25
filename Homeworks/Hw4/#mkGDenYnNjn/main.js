function  exchangeLog(sumUAH, currencyValues = {currency: '', value: 0}){
    return console.log(`${sumUAH / currencyValues['value']} ${currencyValues['currency']}`);
}

function exchange(sumUAH, currencyValues = {currency: '', value: 0}){
    if (currencyValues["currency"] === 'USD') {
        exchangeLog(sumUAH, currencyValues);
    }
    else if (currencyValues["currency"] === 'EUR') {
        exchangeLog(sumUAH, currencyValues);
    }
    else {
        console.log('Не правильно обрана валюта');
    }
}
exchange(10000, {currency: 'USD', value:25});
exchange(10000, {currency: 'EUR', value:42});
