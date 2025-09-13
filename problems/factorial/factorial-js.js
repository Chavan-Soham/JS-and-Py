// write a program to calculate a factorial of a number using both recursion and iteration method

function factorialIter(num) {
    // 5! = 5 * 4 * 3 * 2 * 1 = 120
    // = num * num--
    for (let i = num; i >= 2; i--) {
        let nextElement = i - 1
        num = num * nextElement;
    }
    return num;
}

/* console.log(factorialIter(4)) */

function factorialRecu(num) {
    if (num === 1 || num === 0) {
        return 1 
    }
    if (num > 1) {
        return num*factorialRecu(num - 1)
    } else {
        return `${num} cannot be negative!`
    }
}
console.log(factorialRecu(5))