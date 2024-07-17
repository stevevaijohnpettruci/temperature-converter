const inputCelcius = document.querySelector('#celcius-input');
const inputFahrenheit = document.querySelector('#fahrenheit-input');
const inputKelvin = document.querySelector('#kelvin-input');
const inputReaumur = document.querySelector('#reamur-input');

// Convert Celsius to Fahrenheit, Kelvin, and Reaumur
inputCelcius.addEventListener('input', function() {
    const cTemp = parseFloat(inputCelcius.value);
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = cTemp + 273.15;
    const rTemp = cTemp * (4 / 5);

    inputFahrenheit.value = fTemp.toFixed(2);
    inputKelvin.value = kTemp.toFixed(2);
    inputReaumur.value = rTemp.toFixed(2);
});

// Convert Fahrenheit to Celsius, Kelvin, and Reaumur
inputFahrenheit.addEventListener('input', function() {
    const fTemp = parseFloat(inputFahrenheit.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp - 32) * (5 / 9) + 273.15;
    const rTemp = (fTemp - 32) * (4 / 9);

    inputCelcius.value = cTemp.toFixed(2);
    inputKelvin.value = kTemp.toFixed(2);
    inputReaumur.value = rTemp.toFixed(2);
});

// Convert Kelvin to Celsius, Fahrenheit, and Reaumur
inputKelvin.addEventListener('input', function() {
    const kTemp = parseFloat(inputKelvin.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (kTemp - 273.15) * (9 / 5) + 32;
    const rTemp = (kTemp - 273.15) * (4 / 5);

    inputCelcius.value = cTemp.toFixed(2);
    inputFahrenheit.value = fTemp.toFixed(2);
    inputReaumur.value = rTemp.toFixed(2);
});

// Convert Reaumur to Celsius, Fahrenheit, and Kelvin
inputReaumur.addEventListener('input', function() {
    const rTemp = parseFloat(inputReaumur.value);
    const cTemp = rTemp * (5 / 4);
    const fTemp = rTemp * (9 / 4) + 32;
    const kTemp = rTemp * (5 / 4) + 273.15;

    inputCelcius.value = cTemp.toFixed(2);
    inputFahrenheit.value = fTemp.toFixed(2);
    inputKelvin.value = kTemp.toFixed(2);
});
