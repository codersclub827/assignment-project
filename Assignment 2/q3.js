// Assignment 2 - Question 3
// Function to calculate tax based on salary using switch

function findTax(salary) {
  let taxRate;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 20;
      break;
    case (salary > 1500000):
      taxRate = 30;
      break;
    default:
      return "Invalid salary!";
  }

  const taxAmount = (taxRate / 100) * salary;
  return `Salary: ₹${salary}, Tax Rate: ${taxRate}%, Tax Amount: ₹${taxAmount}`;
}

// Examples:
console.log(findTax(400000));   // Salary: ₹400000, Tax Rate: 0%, Tax Amount: ₹0
console.log(findTax(750000));   // Salary: ₹750000, Tax Rate: 10%, Tax Amount: ₹75000
console.log(findTax(1250000));  // Salary: ₹1250000, Tax Rate: 20%, Tax Amount: ₹250000
console.log(findTax(2000000));  // Salary: ₹2000000, Tax Rate: 30%, Tax Amount: ₹600000
console.log(findTax(-5000));    // Invalid salary!
