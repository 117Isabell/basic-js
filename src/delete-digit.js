const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strNumArr = n.toString().split("");
  let maxNum = 0;

  for (let i = 0; i < strNumArr.length; i++) {
    let currArr = [...strNumArr];
    currArr.splice(i, 1);
    const newNum = parseInt(currArr.join(""), 10);
    maxNum = Math.max(newNum, maxNum);
  }
  return maxNum;
}

module.exports = {
  deleteDigit,
};
