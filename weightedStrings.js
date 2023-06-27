const string = 'abbcccd';
const queries = [1, 3, 9, 8];

/**
 * 
 * @param {String} string
 * @returns {Array<Number>}
 */
function generateWeights(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let substring = '';

  return [...string].map(char => {
    substring = substring.startsWith(char) ? substring.concat(char) : char;
    return (alphabet.indexOf(char) + 1) * substring.length;
  });
}

/**
 * 
 * @param {Array<Number>} weights 
 * @param {Array<Number} queries 
 * @returns {Array<String>}
 */
function validateQueries(weights, queries) {
  return queries.map(query => weights.includes(query) ? 'YES' : 'NO');
}

console.log('Input: ', { string: string, queries: queries });
console.log('Output: ', validateQueries(generateWeights(string), queries));
