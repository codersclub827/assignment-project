function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}
let para = "Javascript is fun and very powerful language.";
console.log(countWords(para)); // 8