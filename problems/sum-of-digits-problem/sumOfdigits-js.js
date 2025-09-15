// write a program to calculate the sum of digits
function sumOfDigits(num) {
    let digits = num.toString().split("")
    let result = digits.reduce((a,b) => Number(a) + Number(b))
    return result
}

console.log(sumOfDigits(152))