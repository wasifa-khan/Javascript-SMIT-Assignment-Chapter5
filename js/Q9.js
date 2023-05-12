//Convert the total Currency
document.write("<h1>Currency in PKR</h1>");
let usDollar = 10;
let saudiRiyal = 25;
let exchangeRateOfUsDollar = 104.80;
let exchangeRateOfSaudiRiyal = 28;
let total = (usDollar * exchangeRateOfUsDollar) + (saudiRiyal * exchangeRateOfSaudiRiyal);

document.write("Total Currency in PKR: " + total);