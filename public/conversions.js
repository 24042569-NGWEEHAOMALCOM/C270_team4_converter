function celsiusToFahrenheit(c) {
  if (typeof c !== "number" || Number.isNaN(c)) {
    throw new Error("Invalid number");
  }
  return (c * 9) / 5 + 32;
}

function fahrenheitToCelsius(f) {
  if (typeof f !== "number" || Number.isNaN(f)) {
    throw new Error("Invalid number");
  }
  return (f - 32) * 5 / 9;
}

function kilometersToMiles(km) {
  if (typeof km !== "number" || Number.isNaN(km)) {
    throw new Error("Invalid number");
  }
  return km * 0.621371;
}

function milesToKilometers(mi) {
  if (typeof mi !== "number" || Number.isNaN(mi)) {
    throw new Error("Invalid number");
  }
  return mi / 0.621371;
}

/* Export for Jest (Node.js) */
module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  kilometersToMiles,
  milesToKilometers
};

/* Make functions available in browser */
if (typeof window !== "undefined") {
  window.celsiusToFahrenheit = celsiusToFahrenheit;
  window.fahrenheitToCelsius = fahrenheitToCelsius;
  window.kilometersToMiles = kilometersToMiles;
  window.milesToKilometers = milesToKilometers;
}
