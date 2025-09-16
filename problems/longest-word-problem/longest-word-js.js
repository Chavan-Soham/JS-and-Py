// write a program to find the longest word in a sentence.

// The sentence: 
// The longest word in this sentence is:
// word count is:

function longestWord(sentence){
    let words = sentence.split(" ")
    words = words.map((value) => value.replace(".", ""))
    let longestWordOfSentence;
    let wordCount;
    
    for (let i = 0; i < words.length; i++) {
        
        let longestWordCount = words[i].length;
        
        for (let j = i; j < words.length; j++) {
            words[j].remove
            if (words[j].length > longestWordCount) {
                longestWordOfSentence = words[j]
                wordCount = words[j].length
            } else {
                longestWordOfSentence = words[i]
                wordCount = longestWordCount
            }
        }
    }

    return {
        sentence,
        longestWordOfSentence,
        wordCount
    }
}

const s = longestWord("Hey my name is Soham and I am a BSC IT graduate.")
console.log(s)