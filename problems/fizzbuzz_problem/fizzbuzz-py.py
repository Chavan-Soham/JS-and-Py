# write a program on fizzbuzz
def fizzBuzz(num):
    org = []
    result = []
    if num >= 1:
        for i in range(1, num+1):
            org.append(i)
        for val in org:
            if val % 3 != 0 and val % 5 != 0:
                result.append(val)
            elif val % 3 == 0 and val % 5 == 0:
                result.append("FizzBuzz")
            elif val % 3 == 0:
                result.append("Fizz")
            else:
                result.append("Buzz")
    else:
        return f"{num} cannot be less than 1!"
    
    return result

print(fizzBuzz(18))