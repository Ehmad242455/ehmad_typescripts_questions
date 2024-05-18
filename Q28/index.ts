function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

function convertAndLogTemperatures(fahrenheitTemperatures: number[]): void {
    const celsiusTemperatures = fahrenheitTemperatures.map(fahrenheitToCelsius);
    console.log(celsiusTemperatures);
}

// Example usage
const fahrenheitTemps = [32, 68, 100, 212];
convertAndLogTemperatures(fahrenheitTemps); 
