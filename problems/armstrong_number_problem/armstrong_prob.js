// 4.	write a program to check if a number is Armstrong or not?
function armStrongCheck(num) {
    let inputNum = num.toString().split('')
    let countOfDigits = inputNum.length
    let arr = []
    let result = 0;
    for (let i = 0; i < countOfDigits; i++) {
        arr.push(Number(inputNum[i]))
        result = result + Math.pow(arr[i], countOfDigits);
    }

    if (num == result) {
        return `Since ${num} is equal to the result ${result}, hence ${num} is an armstrong number`
    } else {
        return `${num} is not equal to ${result}, hence, ${num} is not an armstrong number`
    }
}

console.log(armStrongCheck(1634))