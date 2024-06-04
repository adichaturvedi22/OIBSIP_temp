function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (inputUnit) {
        case 'celsius':
            celsius = inputValue;
            fahrenheit = (inputValue * 9 / 5) + 32;
            kelvin = inputValue + 273.15;
            break;
        case 'fahrenheit':
            celsius = (inputValue - 32) * 5 / 9;
            fahrenheit = inputValue;
            kelvin = celsius + 273.15;
            break;
        case 'kelvin':
            celsius = inputValue - 273.15;
            fahrenheit = (celsius * 9 / 5) + 32;
            kelvin = inputValue;
            break;
    }

    document.getElementById('celsiusResult').innerText = `Celsius: ${celsius.toFixed(2)}°C`;
    document.getElementById('fahrenheitResult').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    document.getElementById('kelvinResult').innerText = `Kelvin: ${kelvin.toFixed(2)}K`;
}
