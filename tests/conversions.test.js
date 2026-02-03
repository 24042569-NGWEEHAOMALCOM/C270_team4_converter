const {
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
} = require("../public/conversions.js");

// =====================
// Temperature (Core)
// =====================
test("0°C = 32°F", () => {
  expect(celsiusToFahrenheit(0)).toBeCloseTo(32, 2);
});

test("100°C = 212°F", () => {
  expect(celsiusToFahrenheit(100)).toBeCloseTo(212, 2);
});

test("32°F = 0°C", () => {
  expect(fahrenheitToCelsius(32)).toBeCloseTo(0, 2);
});

test("-40°C = -40°F", () => {
  expect(celsiusToFahrenheit(-40)).toBeCloseTo(-40, 2);
  expect(fahrenheitToCelsius(-40)).toBeCloseTo(-40, 2);
});

// =====================
// Temperature (V2.1 Kelvin)
// =====================
test("0°C = 273.15K", () => {
  expect(celsiusToKelvin(0)).toBeCloseTo(273.15, 2);
});

test("273.15K = 0°C", () => {
  expect(kelvinToCelsius(273.15)).toBeCloseTo(0, 2);
});

test("-273.15°C = 0K (absolute zero)", () => {
  expect(celsiusToKelvin(-273.15)).toBeCloseTo(0, 2);
});

test("0K = -273.15°C", () => {
  expect(kelvinToCelsius(0)).toBeCloseTo(-273.15, 2);
});

test("32°F = 273.15K", () => {
  expect(fahrenheitToKelvin(32)).toBeCloseTo(273.15, 2);
});

test("273.15K = 32°F", () => {
  expect(kelvinToFahrenheit(273.15)).toBeCloseTo(32, 2);
});

test("negative Kelvin throws error", () => {
  expect(() => kelvinToCelsius(-1)).toThrow();
});

test("negative Kelvin throws error for K→F", () => {
  expect(() => kelvinToFahrenheit(-5)).toThrow();
});

// =====================
// Distance
// =====================
test("1 km ≈ 0.621371 miles", () => {
  expect(kilometersToMiles(1)).toBeCloseTo(0.621371, 6);
});

test("1 mile ≈ 1.609344 km", () => {
  expect(milesToKilometers(1)).toBeCloseTo(1.609344, 6);
});

// =====================
// V2.3 Weight (kg ↔ lbs)
// =====================
test("1 kg ≈ 2.2046226218 lbs", () => {
  expect(kgToLbs(1)).toBeCloseTo(2.2046226218, 6);
});

test("2.2046226218 lbs ≈ 1 kg", () => {
  expect(lbsToKg(2.2046226218)).toBeCloseTo(1, 6);
});

// =====================
// V2.3 Length (cm ↔ ft/in)
// =====================
test("180 cm ≈ 5 ft 10.87 in", () => {
  const r = cmToFeetInches(180);
  expect(r.feet).toBe(5);
  expect(r.inches).toBeCloseTo(10.87, 2);
});

test("5 ft 10 in ≈ 177.8 cm", () => {
  expect(feetInchesToCm(5, 10)).toBeCloseTo(177.8, 1);
});
