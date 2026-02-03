const {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  celsiusToKelvin,
  kelvinToCelsius,
  fahrenheitToKelvin,
  kelvinToFahrenheit,
  kilometersToMiles,
  milesToKilometers
} = require("../public/conversions.js");


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
