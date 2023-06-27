const input1 = '{[()]}';
const input2 = '{[(])}';
const input3 = '{(([])[])[]}';

/**
 * 
 * @param {String} input 
 * @returns {String}
 */
function isBalancedBracket(input) {
  const stack = [];

  [...input].forEach(el => {
    if (
      stack[stack.length - 1] === '(' && el === ')' ||
      stack[stack.length - 1] === '{' && el === '}' ||
      stack[stack.length - 1] === '[' && el === ']'
    ) {
      stack.pop();
    } else {
      stack.push(el);
    }
  });

  return stack.length === 0 ? 'YES' : 'NO';
}

console.log('Input: ', input1);
console.log('Output', isBalancedBracket(input1));

console.log('Input: ', input2);
console.log('Output', isBalancedBracket(input2));

console.log('Input: ', input3);
console.log('Output', isBalancedBracket(input3));
