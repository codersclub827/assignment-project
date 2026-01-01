// Original string
let string = 'INDIA';

// Convert string to array of characters
let arr = string.split('');

// Use splice to insert characters starting at index 3
arr.splice(3, 0, 'O', 'N', 'E', 'S', 'I');

// Convert array back to string
let result = arr.join('');

// Output the result
console.log(result); // "INDONESIA"
