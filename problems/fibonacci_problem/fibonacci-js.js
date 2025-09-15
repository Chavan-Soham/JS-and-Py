// write a program to display the fibonacci sequence

function fibonacciSeq(num) {
    // 0 1 1 2 3 5 8 13 ...
    let fiboSeries = [0, 1]
    for (let i = 0; i < num - 2; i++) {
        let sum = 0;
        sum = fiboSeries[i] + fiboSeries[i + 1] // 0 + 1 = 1, 1 + 1 = 2
        fiboSeries.push(sum) // [0, 1, 1], [0, 1, 1, 2]
    }
    return fiboSeries;
}

console.log(fibonacciSeq(6))