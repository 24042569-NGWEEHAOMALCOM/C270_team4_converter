const {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  kilometersToMiles,
  milesToKilometers
} = require("../public/conversions.js");

test("0°C = 32°F", () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

test("100°C = 212°F", () => {
  expect(celsiusToFahrenheit(100)).toBe(212);
});

test("32°F = 0°C", () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test("-40°C = -40°F", () => {
  expect(celsiusToFahrenheit(-40)).toBe(-40);
});

test("1 km ≈ 0.621371 miles", () => {
  expect(kilometersToMiles(1)).toBeCloseTo(0.621371, 6);
});

test("1 mile ≈ 1.609344 km", () => {
  expect(milesToKilometers(1)).toBeCloseTo(1.609344, 6);
});
