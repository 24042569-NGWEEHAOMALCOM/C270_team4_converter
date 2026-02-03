// ===== Input elements =====
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const kilometersInput = document.getElementById("kilometers");
const milesInput = document.getElementById("miles");

// ===== Helpers =====
function parseInput(value) {
  // Allow empty or just "-" while user is typing a negative number
  if (value === "" || value === "-") return null;

  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function setIfDifferent(input, newValue) {
  if (input.value !== newValue) {
    input.value = newValue;
  }
}

// ===== Temperature handlers (V2.1) =====

// Celsius → Fahrenheit & Kelvin
celsiusInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  if (n === null) {
    setIfDifferent(fahrenheitInput, "");
    setIfDifferent(kelvinInput, "");
    return;
  }

  setIfDifferent(fahrenheitInput, celsiusToFahrenheit(n).toFixed(2));
  setIfDifferent(kelvinInput, celsiusToKelvin(n).toFixed(2));
});

// Fahrenheit → Celsius & Kelvin
fahrenheitInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  if (n === null) {
    setIfDifferent(celsiusInput, "");
    setIfDifferent(kelvinInput, "");
    return;
  }

  setIfDifferent(celsiusInput, fahrenheitToCelsius(n).toFixed(2));
  setIfDifferent(kelvinInput, fahrenheitToKelvin(n).toFixed(2));
});

// Kelvin → Celsius & Fahrenheit
kelvinInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  if (n === null || n < 0) {
    setIfDifferent(celsiusInput, "");
    setIfDifferent(fahrenheitInput, "");
    return;
  }

  setIfDifferent(celsiusInput, kelvinToCelsius(n).toFixed(2));
  setIfDifferent(fahrenheitInput, kelvinToFahrenheit(n).toFixed(2));
});

// ===== Distance handlers (unchanged) =====

// Kilometers → Miles
kilometersInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  if (n === null) return setIfDifferent(milesInput, "");

  setIfDifferent(milesInput, kilometersToMiles(n).toFixed(2));
});

// Miles → Kilometers
milesInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  if (n === null) return setIfDifferent(kilometersInput, "");

  setIfDifferent(kilometersInput, milesToKilometers(n).toFixed(2));
});
