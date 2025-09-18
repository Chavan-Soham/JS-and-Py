// write a program to rotate an array either left or right with k position.

function rotateArray(arr, k, rotateTowards="right") {
    // [0,1,2,3,4], 3, right => [2,3,4,0,1]

    if (arr.length === 0) {
        return `Empty array!`
    } 
    if (k > arr.length) {
        return `K cannot be greater than length of the array!`
    }
    if (rotateTowards.toLowerCase() === "right") {
        for (let i = 1; i <= k; i++) {
            let popped = arr.pop()
            arr.unshift(popped)
        }
        return { arr }
    }

    if (rotateTowards.toLowerCase() === "left") {
        for (let i = 0; i < k; i++) {
            let shifted = arr.shift(i)
            arr.push(shifted)
        }

        return { arr }
    }
}

const s = rotateArray([0, 1, 2, 3, 4], 2, "right")
console.log(s)