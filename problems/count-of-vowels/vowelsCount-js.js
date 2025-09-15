// write a program to count number of vowels in a string

function countOfVowels(sentence) {
    // Hey my name is soham.
    let vowels = ["a", "e", "i", "o", "u"]
    let count = 0;
    for (let char in sentence){
        if (vowels.includes(sentence[char])) {
            count++;
        }
    }
    return count;
}

console.log(countOfVowels("Hey my name is soham."))