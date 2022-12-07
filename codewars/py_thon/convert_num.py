# We need a function that can transform a number (integer) into a string.

# What ways of achieving this do you know?

# Examples (input --> output):
# 123  --> "123"
# 999  --> "999"
# -100 --> "-100"

def number_to_string(num):
    # Return a string of the number here!
    num_string = (str(num))
    return num_string


num1 = 85
num2 = -45

print(num1, num2)


# best practice solutions
def number_to_stringA(num):
    return str(num)
