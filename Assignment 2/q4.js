// Assignment 2 - Question 4
// Sum of products of corresponding digits

function sumOfDigitProducts(n1, n2) {
  let sum = 0;

  while (n1 > 0 || n2 > 0) {
    let digit1 = n1 % 10; // last digit of n1
    let digit2 = n2 % 10; // last digit of n2

    sum += digit1 * digit2;

    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }

  return sum;
}

// Examples
console.log(sumOfDigitProducts(6, 34));    // 24  -> (6*4) + (0*3)
console.log(sumOfDigitProducts(123, 45));  // (3*5) + (2*4) + (1*0) = 23
console.log(sumOfDigitProducts(89, 76));   // (9*6) + (8*7) = 110
