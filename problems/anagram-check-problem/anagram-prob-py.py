# write a program to check whether two strings are anagram of each other or not.

def anagramCheck(str1, str2):
    setA = set(str1)
    setB = set(str2)
    return f"{str1} and {str2} are anagram of each other" if (setA.issubset(setB) == setB.issubset(setA)) == True else f"{str1} and {str2} are not anagram of each other"

print(anagramCheck("LISTEN", "SILENT"))