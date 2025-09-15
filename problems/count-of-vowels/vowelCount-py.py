# write a program to count number of vowels in a string

def countOfVowels(sentence):
    vowels = ["a", "e", "i", "o", "u"]
    count = 0
    for char in sentence:
        if vowels.__contains__(char):
            count = count + 1
    return count
        
        
print(countOfVowels("Hey my name is soham."))