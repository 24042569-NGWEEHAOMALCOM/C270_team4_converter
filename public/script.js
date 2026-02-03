const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kilometersInput = document.getElementById("kilometers");
const milesInput = document.getElementById("miles");

function parseInput(value) {
  // Allow empty or just "-" while user is typing a negative number
  if (value === "" || value === "-") return null;

  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function setIfDifferent(input, newValue) {
  // Avoid unnecessary writes while typing
  if (input.value !== newValue) input.value = newValue;
}

// Temperature handlers
celsiusInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  if (n === null) return setIfDifferent(fahrenheitInput, "");

  const f = celsiusToFahrenheit(n);
  setIfDifferent(fahrenheitInput, f.toFixed(2));
});

fahrenheitInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  if (n === null) return setIfDifferent(celsiusInput, "");

  const c = fahrenheitToCelsius(n);
  setIfDifferent(celsiusInput, c.toFixed(2));
});

// Distance handlers
kilometersInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  if (n === null) return setIfDifferent(milesInput, "");

  const mi = kilometersToMiles(n);
  setIfDifferent(milesInput, mi.toFixed(2));
});

milesInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  if (n === null) return setIfDifferent(kilometersInput, "");

  const km = milesToKilometers(n);
  setIfDifferent(kilometersInput, km.toFixed(2));
});
