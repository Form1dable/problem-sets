## Valid Anagram

### Solution 1 (Slow and suitable when string is small)

Find the number of frequencies from an alphabetical table and compares

freq1 = frequencies of character in string 1
freq2 = frequencies of character in string 2

freq1 === freq2

we can take an array of alphabetical letters starting with 0. And for each character in a string, we can increment the value for each corresponding letter.

### Solution 2 (Hash Table)

Step 1: Compare the length of the two strings.
Step 2: Count all the frequencies of the two strings.
Step 3: Check if all the key exists in both the object and if the key have same values. Return false for non-existence and for different values.
