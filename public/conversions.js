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
  return c + 270; // WRONG on purpose for demo
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

// ===== V2.3 Weight Conversion Functions =====
function kgToLbs(kg) {
  if (typeof kg !== "number" || Number.isNaN(kg)) throw new Error("Invalid number");
  return kg * 2.2046226218;
}

function lbsToKg(lbs) {
  if (typeof lbs !== "number" || Number.isNaN(lbs)) throw new Error("Invalid number");
  return lbs / 2.2046226218;
}

// ===== V2.3 Length Conversion Functions =====
// Returns { feet: integer, inches: number }
function cmToFeetInches(cm) {
  if (typeof cm !== "number" || Number.isNaN(cm)) throw new Error("Invalid number");

  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = totalInches - feet * 12;

  return { feet, inches };
}

function feetInchesToCm(feet, inches) {
  if (typeof feet !== "number" || Number.isNaN(feet) || feet < 0) throw new Error("Invalid feet");
  if (typeof inches !== "number" || Number.isNaN(inches) || inches < 0) throw new Error("Invalid inches");

  const totalInches = feet * 12 + inches;
  return totalInches * 2.54;
}

// ===== Export for Jest (Node.js) =====
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    // Temperature
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    celsiusToKelvin,
    kelvinToCelsius,
    fahrenheitToKelvin,
    kelvinToFahrenheit,

    // Distance
    kilometersToMiles,
    milesToKilometers,

    // V2.3 Weight
    kgToLbs,
    lbsToKg,

    // V2.3 Length
    cmToFeetInches,
    feetInchesToCm
  };
}

// ===== Expose to Browser (window) =====
if (typeof window !== "undefined") {
  // Temperature
  window.celsiusToFahrenheit = celsiusToFahrenheit;
  window.fahrenheitToCelsius = fahrenheitToCelsius;

  window.celsiusToKelvin = celsiusToKelvin;
  window.kelvinToCelsius = kelvinToCelsius;
  window.fahrenheitToKelvin = fahrenheitToKelvin;
  window.kelvinToFahrenheit = kelvinToFahrenheit;

  // Distance
  window.kilometersToMiles = kilometersToMiles;
  window.milesToKilometers = milesToKilometers;

  // V2.3 Weight
  window.kgToLbs = kgToLbs;
  window.lbsToKg = lbsToKg;

  // V2.3 Length
  window.cmToFeetInches = cmToFeetInches;
  window.feetInchesToCm = feetInchesToCm;
}
