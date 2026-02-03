// ===== Temperature Conversion Functions =====
function celsiusToFahrenheit(c) {
  if (typeof c !== "number" || Number.isNaN(c)) throw new Error("Invalid number");
  return (c * 9) / 5 + 32;
}

function fahrenheitToCelsius(f) {
  if (typeof f !== "number" || Number.isNaN(f)) throw new Error("Invalid number");
  return ((f - 32) * 5) / 9;
}

// --- V2.1 Kelvin support ---
function celsiusToKelvin(c) {
  if (typeof c !== "number" || Number.isNaN(c)) throw new Error("Invalid number");
  return c + 273.15;
}

function kelvinToCelsius(k) {
  if (typeof k !== "number" || Number.isNaN(k) || k < 0) throw new Error("Invalid Kelvin value");
  return k - 273.15;
}

function fahrenheitToKelvin(f) {
  if (typeof f !== "number" || Number.isNaN(f)) throw new Error("Invalid number");
  return ((f - 32) * 5) / 9 + 273.15;
}

function kelvinToFahrenheit(k) {
  if (typeof k !== "number" || Number.isNaN(k) || k < 0) throw new Error("Invalid Kelvin value");
  return ((k - 273.15) * 9) / 5 + 32;
}

// ===== Distance Conversion Functions =====
function kilometersToMiles(km) {
  if (typeof km !== "number" || Number.isNaN(km)) throw new Error("Invalid number");
  return km * 0.621371;
}

function milesToKilometers(mi) {
  if (typeof mi !== "number" || Number.isNaN(mi)) throw new Error("Invalid number");
  return mi / 0.621371;
}

// ===== Export for Jest (Node.js) =====
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    celsiusToKelvin,
    kelvinToCelsius,
    fahrenheitToKelvin,
    kelvinToFahrenheit,
    kilometersToMiles,
    milesToKilometers
  };
}

// ===== Expose to Browser (window) =====
if (typeof window !== "undefined") {
  window.celsiusToFahrenheit = celsiusToFahrenheit;
  window.fahrenheitToCelsius = fahrenheitToCelsius;

  window.celsiusToKelvin = celsiusToKelvin;
  window.kelvinToCelsius = kelvinToCelsius;
  window.fahrenheitToKelvin = fahrenheitToKelvin;
  window.kelvinToFahrenheit = kelvinToFahrenheit;

  window.kilometersToMiles = kilometersToMiles;
  window.milesToKilometers = milesToKilometers;
}
