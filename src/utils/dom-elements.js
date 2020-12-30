const weatherOutput = document.getElementById("weather-output");
const input = document.getElementById("degree");
const button = document.getElementById("clickDegree");
const myApiKey = "827dd5ea0e30919f428e83ad227c3851";
const toggle = document.getElementById("toggle");
const cityName = document.createElement("p");
const degree = document.createElement("p");
const iconContainer = document.createElement("div");
const iconImg = document.createElement("img");
const degreeType = document.getElementById('degree-type');
let defUnit = 'celcius';
let defValue = 0;

export { weatherOutput, input, button, myApiKey, toggle, cityName, degree, iconContainer, iconImg, defUnit, defValue, degreeType };
