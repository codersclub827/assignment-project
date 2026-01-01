// Assignment 2 - Question 2
// Function to perform basic arithmetic operations using switch

function calculate(num1, num2, operation) {
  let result;
  
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        return "Error: Division by zero!";
      }
      break;
    default:
      return "Invalid operation! Use add, subtract, multiply, or divide.";
  }
  
  return result;
}

// Examples:
console.log(calculate(10, 5, "add"));      // 15
console.log(calculate(10, 5, "subtract")); // 5
console.log(calculate(10, 5, "multiply")); // 50
console.log(calculate(10, 5, "divide"));   // 2
console.log(calculate(10, 0, "divide"));   // Error: Division by zero!
console.log(calculate(10, 5, "mod"));      // Invalid operation!
