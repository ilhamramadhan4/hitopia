const string = '394143';
const k = 2;

const string2 = '1234553142';
const k2 = 3;

/**
 * 
 * @param {String} input 
 * @param {Number} i 
 * @param {Number} j 
 * @param {Number} k 
 * @returns {String} 
 */
function findHighestPalindrome(input, i, j, k) {
  if (i > j) return input;

  if (k === 0 && i < j || i === j) return '-1';

  const leftValue = parseInt(input.charAt(i));
  const rightValue = parseInt(input.charAt(j));

  if (isNaN(parseInt(input.charAt(i))) || isNaN(parseInt(input.charAt(j)))) return '-1';

  if (leftValue > rightValue) {
    return findHighestPalindrome(replaceCharByIndex(input, j, input.charAt(i)), i + 1, j - 1, k - 1);
  } else if (leftValue < rightValue) {
    return findHighestPalindrome(replaceCharByIndex(input, i, input.charAt(j)), i + 1, j - 1, k - 1);
  }

  return findHighestPalindrome(input, i + 1, j - 1, k);
}

function replaceCharByIndex(string, index, newChar) {
  return `${string.slice(0, index)}${newChar}${string.slice(index + 1)}`;
}

console.log('Input: ', { string: string, k: k });
console.log('Output: ', findHighestPalindrome(string, 0, string.length - 1, k));

console.log('Input: ', { string: string2, k: k2 });
console.log('Output: ', findHighestPalindrome(string2, 0, string2.length - 1, k2));
