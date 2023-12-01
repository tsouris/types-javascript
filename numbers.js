let elementWidth = "50px";
elementWidth = Number.parseInt(elementWidth);
console.log(elementWidth);

const base = 2;
const power = 5;

const result = Math.pow(base, power);
console.log(result);
console.log(base ** power);

// 1
// let input = prompt("Enter a number");
// input = Number(input);
// console.log(input);

// 2
// let pow = prompt("Enter a power of a numeber");
// pow = Math.pow(power);
// console.log(pow);

const max = 70;
const min = 10;

const value = Math.round(Math.random()*(max-min) + min);
console.log(value);