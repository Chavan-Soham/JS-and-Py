# write a program to calculate the sum of digits

def sumOfDigits(num):
    digits = str(num)
    digits_sum = 0
    for i in digits:
        digits_sum = digits_sum + int(i)
    return digits_sum

print(sumOfDigits(1511))    