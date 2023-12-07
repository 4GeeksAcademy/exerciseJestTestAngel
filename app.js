// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yen
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en yen
    return valueInYen;
}


const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a pound
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en pound
    return valueInPound;
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }




