# write a program to display the fibonacci sequence

def fibonacciSeq(num):
    fiboSeries = [0, 1]
    for i in range(0, num - 2):
        sum = fiboSeries[i] + fiboSeries[i + 1]
        fiboSeries.append(sum)
    
    return fiboSeries


print(fibonacciSeq(6))