# write a program to calculate a factorial of a number using both recursion and iteration method

def factorialIter(num):
    if num > 0:
        for i in range(num, 1, -1):
            nextElement = i - 1
            num = num * nextElement
    else:
        num = 1
    return num


""" print(factorialIter(10)) """

def factorialRecur(num):
    if num == 0 or num == 1:
        return 1
    if num > 1:
        return num * factorialRecur(num - 1)
    else:
        return f"{num} cannot be negative!"

""" print(factorialRecur(5)) """