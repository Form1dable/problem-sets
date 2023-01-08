# First and Last Position

## Solution 1 (Linear Search)

We can traverse the array and find the first position. Then keep traversing until we hit the last element to confirm the last position of the target.

STEP 1: Loop over the array to look for the starting position of the target.

STEP 2: When the target is found, looping again starting from the start index and comparing the index result with the target value (Considering the list is sorted). When the value is greater than the target, meaning the last instance of target was found. Returns the result

## Solution 2 (Binary Search)
