// write a program on fizzbuzz
function fizzBuzz(num) {
    let orgArr = []
    let result = []
    if (num >= 1) {
        for (let i = 1; i <= num; i++) {
            orgArr.push(i)
        }
        result = orgArr.map((value) => {
            if (value % 3 !== 0 && value % 5 !== 0) {
                return value
            } else if (value % 3 === 0 && value % 5 === 0) {
                return 'FizzBuzz'
            } else if (value % 3 === 0) {
                return 'Fizz'
            } else{
                return 'Buzz'
            }
        })
    }
    return result;
}

/* console.log(fizzBuzz(20)) */