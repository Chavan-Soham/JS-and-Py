# write a program to rotate a list either left or right with k position.

def rotateList(li, k, towards):
    if (len(li) == 0):
        return f"Empty array!"
    if k > len(li):
        return f"K cannot be greater than length of the array!"
    
    if towards.lower() == "right":
        for _ in range(k):
            popped = li.pop()      # remove last element
            li.insert(0, popped)   # insert it at the beginning
        return li
    
    if towards.lower() == "left":
        for _ in range(k):
            shifted = li.pop(0)      # remove last element
            li.append(shifted)   # insert it at the beginning
        return li
    
        
print(rotateList([1,2,3,4,5], 2, "RIGHT"))