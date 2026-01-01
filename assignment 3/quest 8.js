function repeatedDigitSum(num) {
    while(num > 9){
        num = num.toString().split('').reduce((a,b) => a + Number(b), 0);
    }
    return num;
}
console.log(repeatedDigitSum(456)); // 6
