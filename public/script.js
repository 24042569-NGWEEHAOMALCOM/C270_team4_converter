// Temperature Converter
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

// Distance Converter
const kilometersInput = document.getElementById('kilometers');
const milesInput = document.getElementById('miles');

// Temperature Conversion Functions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Distance Conversion Functions
function kilometersToMiles(kilometers) {
  return kilometers * 0.621371;
}

function milesToKilometers(miles) {
  return miles / 0.621371;
}

// Temperature Input Handlers
celsiusInput.addEventListener('input', (e) => {
  const value = e.target.value;
  
  if (value === '' || value === '-') {
    fahrenheitInput.value = '';
    return;
  }
  
  const celsius = parseFloat(value);
  if (!isNaN(celsius)) {
    const fahrenheit = celsiusToFahrenheit(celsius);
    fahrenheitInput.value = fahrenheit.toFixed(2);
  }
});

fahrenheitInput.addEventListener('input', (e) => {
  const value = e.target.value;
  
  if (value === '' || value === '-') {
    celsiusInput.value = '';
    return;
  }
  
  const fahrenheit = parseFloat(value);
  if (!isNaN(fahrenheit)) {
    const celsius = fahrenheitToCelsius(fahrenheit);
    celsiusInput.value = celsius.toFixed(2);
  }
});

// Distance Input Handlers
kilometersInput.addEventListener('input', (e) => {
  const value = e.target.value;
  
  if (value === '' || value === '-') {
    milesInput.value = '';
    return;
  }
  
  const kilometers = parseFloat(value);
  if (!isNaN(kilometers)) {
    const miles = kilometersToMiles(kilometers);
    milesInput.value = miles.toFixed(2);
  }
});

milesInput.addEventListener('input', (e) => {
  const value = e.target.value;
  
  if (value === '' || value === '-') {
    kilometersInput.value = '';
    return;
  }
  
  const miles = parseFloat(value);
  if (!isNaN(miles)) {
    const kilometers = milesToKilometers(miles);
    kilometersInput.value = kilometers.toFixed(2);
  }
});
