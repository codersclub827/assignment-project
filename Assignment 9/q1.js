// ================================
// 1️⃣ Variable Scope with let, const, var
// ================================
function variableScopeDemo() {
  if (true) {
    var varVariable = "I'm var"; // function-scoped
    let letVariable = "I'm let"; // block-scoped
    const constVariable = "I'm const"; // block-scoped
    console.log("Inside block:");
    console.log(varVariable);   // Accessible
    console.log(letVariable);   // Accessible
    console.log(constVariable); // Accessible
  }

  console.log("Outside block:");
  console.log(varVariable);   // Accessible
  // console.log(letVariable); // Uncaught ReferenceError
  // console.log(constVariable); // Uncaught ReferenceError
}

variableScopeDemo();


// ================================
// 2️⃣ Array of Fruits & Return Second Fruit
// ================================
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

function getSecondFruit(arr) {
  return arr[1]; // second element
}

console.log("Second fruit:", getSecondFruit(fruits));


// ================================
// 3️⃣ Add & Remove Element using push() and pop()
// ================================
function modifyArray(arr, newElement) {
  arr.push(newElement);
  arr.pop();
  return arr;
}

console.log("Modified array:", modifyArray([1, 2, 3], 4));


// ================================
// 4️⃣ Square Numbers using map()
// ================================
function squareNumbers(numbers) {
  return numbers.map(num => num ** 2);
}

console.log("Squared numbers:", squareNumbers([1, 2, 3, 4]));


// ================================
// 5️⃣ Filter Odd Numbers using filter()
// ================================
function filterOddNumbers(numbers) {
  return numbers.filter(num => num % 2 !== 0);
}

console.log("Odd numbers:", filterOddNumbers([1, 2, 3, 4, 5]));


// ================================
// 6️⃣ Object person & Greeting Function
// ================================
const person = {
  name: "Alice",
  age: 25,
  occupation: "Developer"
};

function greetPerson(obj) {
  console.log(`Hello! My name is ${obj.name}, I am ${obj.age} years old, and I work as a ${obj.occupation}.`);
}

greetPerson(person);


// ================================
// 7️⃣ Rectangle Area Function
// ================================
function rectangleArea(rect) {
  return rect.width * rect.height;
}

console.log("Rectangle area:", rectangleArea({ width: 5, height: 10 }));


// ================================
// 8️⃣ Return Object Keys
// ================================
function getObjectKeys(obj) {
  return Object.keys(obj);
}

console.log("Object keys:", getObjectKeys({ a: 1, b: 2, c: 3 }));


// ================================
// 9️⃣ Merge Two Objects
// ================================
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

console.log("Merged object:", mergeObjects({ a: 1 }, { b: 2, c: 3 }));


// ================================
// 🔟 Sum of Numbers using reduce()
// ================================
function sumArray(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("Sum of array:", sumArray([1, 2, 3, 4, 5]));
