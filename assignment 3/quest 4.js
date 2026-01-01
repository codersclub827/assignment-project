let text = "Javascript is amazing and powerful!";
let vowels = 'aeiouAEIOU';
let vowelCount = 0;
let consonantCount = 0;

for (let char of text) {
    if (/[a-zA-Z]/.test(char)) {
        vowels.includes(char) ? vowelCount++ : consonantCount++;
    }
}
console.log(`Vowels: ${vowelCount}, Consonants: ${consonantCount}`);