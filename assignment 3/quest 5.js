function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}
console.log(correctfn("I live in Indai", "Indai", "India")); // "I live in India"
