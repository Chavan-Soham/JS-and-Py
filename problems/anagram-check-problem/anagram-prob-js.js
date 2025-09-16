// write a program to check whether two strings are anagram of each other or not.

function anagramCheck(str1, str2){
    let setA = new Set([...str1])
    let setB = new Set([...str2])
    return setA.isSubsetOf(setB) === setB.isSubsetOf(setA)
}


console.log(anagramCheck("LISTEN", "SILENT"))