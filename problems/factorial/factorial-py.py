# write a program to calculate a factorial of a number using both recursion and iteration method

def factorialIter(num):
    if num > 0:
        for i in range(num, 1, -1):
            nextElement = i - 1
            num = num * nextElement
    else:
        num = 1
    return num


print(factorialIter(10))