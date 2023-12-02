import prompt from 'prompt';
// let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth);
// console.log(elementWidth);

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result);
// console.log(base ** power);

// 1
// let input = prompt("Enter a number");
// input = Number(input);
// console.log(input);

// 2
// let pow = prompt("Enter a power of a numeber");
// pow = Math.pow(power);
// console.log(pow);

// const max = 70;
// const min = 10;

// const value = Math.round(Math.random()*(max-min) + min);
// console.log(value);

const bonus = 0.15;
const taxes = 0.19;

let salary = Number(prompt("Enter your salary"));

let netSalary = salary * (1 + bonus) * (1 - taxes);

console.log(netSalary);

alert(`In the end, your net salary amounts to ${netSalary}`);