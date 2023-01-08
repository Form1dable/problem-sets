// Count Odd numbers in an interval range

/* Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive) */

function countOdd(low, high) {
  let oddCount = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount;
}

console.log(countOdd(7, 100));
