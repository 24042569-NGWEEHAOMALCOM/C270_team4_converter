// ===== Elements =====
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const statusInput = document.getElementById("status"); // Added status element

const kilometersInput = document.getElementById("kilometers");
const milesInput = document.getElementById("miles");

const kgInput = document.getElementById("kg");
const lbsInput = document.getElementById("lbs");

const cmInput = document.getElementById("cm");
const feetInput = document.getElementById("feet");
const inchesInput = document.getElementById("inches");

const precisionSelect = document.getElementById("precision");

const clearTempBtn = document.getElementById("clear-temp");
const clearDistanceBtn = document.getElementById("clear-distance");
const clearMeasurementsBtn = document.getElementById("clear-measurements");

let lastSource = null;

// ===== Temperature status logic (V2.2) =====
function updateStatus(celsius) {
  if (celsius === null) {
    statusInput.value = "";
    return;
  }
  
  if (celsius <= 0) {
    statusInput.value = "Freezing";
  } else if (celsius > 0 && celsius <= 17) {
    statusInput.value = "Very Cold";
  } else if (celsius > 17 && celsius < 25) {
    statusInput.value = "Cold";  
  } else if (celsius > 24 && celsius <= 28) {
    statusInput.value = "Mild"; 
  } else if (celsius > 28 && celsius <= 30) {
    statusInput.value = "Warm";  
  } else {
    statusInput.value = "Hot";
  }
}

// ===== Helpers =====
function parseInput(value) {
  if (value === "" || value === "-") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function getPrecision() {
  const p = Number(precisionSelect.value);
  return Number.isFinite(p) ? p : 2;
}

function formatNumber(n) {
  return n.toFixed(getPrecision());
}

function setIfDifferent(input, newValue) {
  if (input.value !== newValue) input.value = newValue;
}

// ===== Clear functions =====
function clearTemperature() {
  setIfDifferent(celsiusInput, "");
  setIfDifferent(fahrenheitInput, "");
  setIfDifferent(kelvinInput, "");
  updateStatus(null); // Clear status too
  lastSource = null;
}

function clearDistance() {
  setIfDifferent(kilometersInput, "");
  setIfDifferent(milesInput, "");
  lastSource = null;
}

function clearMeasurements() {
  setIfDifferent(kgInput, "");
  setIfDifferent(lbsInput, "");
  setIfDifferent(cmInput, "");
  setIfDifferent(feetInput, "");
  setIfDifferent(inchesInput, "");
  lastSource = null;
}

// ===== Update functions =====
// Temperature
function updateFromCelsius(c) {
  setIfDifferent(fahrenheitInput, formatNumber(celsiusToFahrenheit(c)));
  setIfDifferent(kelvinInput, formatNumber(celsiusToKelvin(c)));
  updateStatus(c); // Update status based on Celsius
}

function updateFromFahrenheit(f) {
  const c = fahrenheitToCelsius(f);
  setIfDifferent(celsiusInput, formatNumber(c));
  setIfDifferent(kelvinInput, formatNumber(fahrenheitToKelvin(f)));
  updateStatus(c); // Update status based on calculated Celsius
}

function updateFromKelvin(k) {
  if (k < 0) {
    setIfDifferent(celsiusInput, "");
    setIfDifferent(fahrenheitInput, "");
    updateStatus(null);
    return;
  }
  const c = kelvinToCelsius(k);
  setIfDifferent(celsiusInput, formatNumber(c));
  setIfDifferent(fahrenheitInput, formatNumber(kelvinToFahrenheit(k)));
  updateStatus(c); // Update status based on calculated Celsius
}

// Distance
function updateFromKilometers(km) {
  setIfDifferent(milesInput, formatNumber(kilometersToMiles(km)));
}

function updateFromMiles(mi) {
  setIfDifferent(kilometersInput, formatNumber(milesToKilometers(mi)));
}

// Measurements - Weight
function updateFromKg(kg) {
  setIfDifferent(lbsInput, formatNumber(kgToLbs(kg)));
}

function updateFromLbs(lbs) {
  setIfDifferent(kgInput, formatNumber(lbsToKg(lbs)));
}

// Measurements - Length
function updateFromCm(cm) {
  const { feet, inches } = cmToFeetInches(cm);
  setIfDifferent(feetInput, String(feet));
  setIfDifferent(inchesInput, formatNumber(inches));
}

function updateCmFromFeetInches() {
  const ft = parseInput(feetInput.value);
  const inch = parseInput(inchesInput.value);

  if (ft === null && inch === null) {
    setIfDifferent(cmInput, "");
    return;
  }

  const ftVal = ft === null ? 0 : ft;
  const inVal = inch === null ? 0 : inch;

  if (ftVal < 0 || inVal < 0) {
    setIfDifferent(cmInput, "");
    return;
  }

  const cm = feetInchesToCm(ftVal, inVal);
  setIfDifferent(cmInput, formatNumber(cm));
}

// ===== Temperature input handlers =====
celsiusInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  lastSource = "c";
  if (n === null) {
    setIfDifferent(fahrenheitInput, "");
    setIfDifferent(kelvinInput, "");
    updateStatus(null);
    return;
  }
  updateFromCelsius(n);
});

fahrenheitInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  lastSource = "f";
  if (n === null) {
    setIfDifferent(celsiusInput, "");
    setIfDifferent(kelvinInput, "");
    updateStatus(null);
    return;
  }
  updateFromFahrenheit(n);
});

kelvinInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  lastSource = "k";
  if (n === null) {
    setIfDifferent(celsiusInput, "");
    setIfDifferent(fahrenheitInput, "");
    updateStatus(null);
    return;
  }
  updateFromKelvin(n);
});

// ===== Distance input handlers =====
kilometersInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  lastSource = "km";
  if (n === null) return setIfDifferent(milesInput, "");
  updateFromKilometers(n);
});

milesInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  lastSource = "mi";
  if (n === null) return setIfDifferent(kilometersInput, "");
  updateFromMiles(n);
});

// ===== Measurements input handlers =====
// Weight
kgInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  lastSource = "kg";
  if (n === null) return setIfDifferent(lbsInput, "");
  updateFromKg(n);
});

lbsInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  lastSource = "lbs";
  if (n === null) return setIfDifferent(kgInput, "");
  updateFromLbs(n);
});

// Length
cmInput.addEventListener("input", (e) => {
  const n = parseInput(e.target.value);
  lastSource = "cm";
  if (n === null) {
    setIfDifferent(feetInput, "");
    setIfDifferent(inchesInput, "");
    return;
  }
  updateFromCm(n);
});

feetInput.addEventListener("input", () => {
  lastSource = "ftin";
  updateCmFromFeetInches();
});

inchesInput.addEventListener("input", () => {
  lastSource = "ftin";
  updateCmFromFeetInches();
});

// ===== Clear buttons =====
clearTempBtn.addEventListener("click", clearTemperature);
clearDistanceBtn.addEventListener("click", clearDistance);
clearMeasurementsBtn.addEventListener("click", clearMeasurements);

// ===== Precision change =====
precisionSelect.addEventListener("change", () => {
  try {
    if (lastSource === "c") {
      const c = parseInput(celsiusInput.value);
      if (c !== null) updateFromCelsius(c);
    } else if (lastSource === "f") {
      const f = parseInput(fahrenheitInput.value);
      if (f !== null) updateFromFahrenheit(f);
    } else if (lastSource === "k") {
      const k = parseInput(kelvinInput.value);
      if (k !== null) updateFromKelvin(k);
    } else if (lastSource === "km") {
      const km = parseInput(kilometersInput.value);
      if (km !== null) updateFromKilometers(km);
    } else if (lastSource === "mi") {
      const mi = parseInput(milesInput.value);
      if (mi !== null) updateFromMiles(mi);
    } else if (lastSource === "kg") {
      const kg = parseInput(kgInput.value);
      if (kg !== null) updateFromKg(kg);
    } else if (lastSource === "lbs") {
      const lbs = parseInput(lbsInput.value);
      if (lbs !== null) updateFromLbs(lbs);
    } else if (lastSource === "cm") {
      const cm = parseInput(cmInput.value);
      if (cm !== null) updateFromCm(cm);
    } else if (lastSource === "ftin") {
      updateCmFromFeetInches();
    }
  } catch {
    // Silent fail
  }
});