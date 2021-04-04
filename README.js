# temperature-converter
// This is a temperature converter project from codecademy.

const kelvin = 45; // This is the tmeperature in kelvin

const celsius = kelvin - 273; // This is the temperature in celsius

let newton = celsius * (33 / 100) // This the temperature in newton

newton = Math.floor(newton)

let fahrenheit = celsius * (9 / 5) + 32; // This is the temperature in fahrenheit

fahrenheit = Math.floor(fahrenheit); // This rounds down the temperature in fahrenheit

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");

console.log("The temperature is " + newton + " degrees Newton.");
