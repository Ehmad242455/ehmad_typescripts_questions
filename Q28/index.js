"use strict";
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function convertAndLogTemperatures(fahrenheitTemperatures) {
    const celsiusTemperatures = fahrenheitTemperatures.map(fahrenheitToCelsius);
    console.log(celsiusTemperatures);
}
// Example usage
const fahrenheitTemps = [32, 68, 100, 212];
convertAndLogTemperatures(fahrenheitTemps);
