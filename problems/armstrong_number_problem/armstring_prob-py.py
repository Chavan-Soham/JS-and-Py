# 4.	write a program to check if a number is Armstrong or not?
def armStrongCheck(num):
    inputNum = str(num)
    countDigits = len(inputNum)
    result = 0
    
    for i in inputNum:
        result = result + int(i) ** countDigits
    
    if result == num:
        return f"Since {num} is equal to the result {result}, hence {num} is an Armstrong number"
    else:
        return f"{num} is not equal to {result}, hence {num} is not an Armstrong number"
    
print(armStrongCheck(370))
    
