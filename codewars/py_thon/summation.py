# Summation
# Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

# For example:

# summation(2) -> 3
# 1 + 2

# summation(8) -> 36
# 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

num = 5


def summation(num):
    sum = 0
    i = 0
    while (i <= num):
        sum += i
        i += 1
    return sum


print(summation(num))

# best practices solution
def summationA(num):
    return sum(range(num + 1))
