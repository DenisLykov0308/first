function seconds(total) {
  return total % 60;
}
let result = seconds(125);
console.log("Завдання 1:",result);
//
function perimeter(side, count) {
  return side * count;
}
console.log("Завдання 2:",perimeter(5, 6));
//
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
console.log("Завдання 3:");
fizzBuzz(15);
//
function Calculate(a, b, c) {
  let average = (a + b + c) / 3;
  console.log(average);
}
console.log("Завдання 4:");
Calculate(5, 10, 15);
//
function isDivisible1 (n, x, y) {
    if (n % x === 0 && n % y === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  function isDivisible2 (n, x, y) {
    return n % x === 0 && n % y === 0 ? true : false;
  } 
  
  function isDivisible3(n, x, y) {
    return n % x === 0 && n % y === 0;
  }
  console.log("Завдання 5:", isDivisible1(10, 2, 5));
  console.log(isDivisible2(10, 2, 3));
  console.log(isDivisible3(15, 3, 5));
//
  function analyzeArray(N) {
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  console.log("Масив:", arr);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((acc, val) => acc + val, 0);
  let average = sum / N;
  let oddValues = arr.filter(val => val % 2 !== 0);

  console.log("Найбільше значення:", max);
  console.log("Найменше значення:", min);
  console.log("Сума елементів:", sum);
  console.log("Середнє арифметичне:", average);
  console.log("Непарні значення:", oddValues);
}
console.log("Завдання 6:")
analyzeArray(10);
//
function createAndModifyMatrix() {
  const size = 5;
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = Math.floor(Math.random() * 21) - 10;
    }
  }
  console.log("Початкова матриця:");
  matrix.forEach(row => console.log(row));
  for (let i = 0; i < size; i++) {
    if (matrix[i][i] < 0) {
      matrix[i][i] = 0;
    } else if (matrix[i][i] > 0) {
      matrix[i][i] = 1;
    }
  }
  console.log("Модифікована матриця:");
  matrix.forEach(row => console.log(row));
}
console.log("Завдання 7:")
createAndModifyMatrix();
//
function Add(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}

function Sub(a, b) {
  console.log(`${a} - ${b} = ${a - b}`);
}

function Mul(a, b) {
  console.log(`${a} * ${b} = ${a * b}`);
}

function Div(a, b) {
  if (b === 0) {
    console.log("Помилка: ділення на нуль неможливе!");
  } else {
    console.log(`${a} / ${b} = ${a / b}`);
  }
}

function getNumber(promptText) {
  let num;
  do {
    num = Number(prompt(promptText));
  } while (isNaN(num));
  return num;
}

function calculator() {
  let a = getNumber("Введіть перше число:");
  let b = getNumber("Введіть друге число:");
  
  let operation;
  do {
    operation = prompt("Оберіть операцію: Add, Sub, Mul, Div").toLowerCase();
  } while (!["add", "sub", "mul", "div"].includes(operation));

  switch (operation) {
    case "add":
      Add(a, b);
      break;
    case "sub":
      Sub(a, b);
      break;
    case "mul":
      Mul(a, b);
      break;
    case "div":
      Div(a, b);
      break;
  }
}
console.log("Завдання 8:")
calculator();
//
function analyzeNumber(n) {
  if (n > 0) {
    console.log(`${n} є позитивним числом.`);
  } else if (n < 0) {
    console.log(`${n} є негативним числом.`);
  } else {
    console.log(`Число дорівнює нулю.`);
  }

  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  if (isPrime(n)) {
    console.log(`${n} є простим числом.`);
  } else {
    console.log(`${n} не є простим числом.`);
  }

  const divisors = [2, 3, 5, 6, 9];
  divisors.forEach(div => {
    if (n % div === 0) {
      console.log(`${n} ділиться на ${div} без залишку.`);
    } else {
      console.log(`${n} не ділиться на ${div} без залишку.`);
    }
  });
}
console.log("Завдання 9:")
analyzeNumber(30);
//
function reverseAndSquare(arr) {
  return arr
    .slice()        
    .reverse() 
    .map(item => {
      return (typeof item === 'number') ? item ** 2 : item;
    });
}
const input = [2, 'a', 5, true, 3];
const res = reverseAndSquare(input);
console.log("Завдання 10:",res);
//
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const inp= [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
const resu = removeDuplicates(inp);
console.log("Завдання 11:",resu);






