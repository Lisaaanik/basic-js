const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  throw new NotImplementedError('Not implemented');
  let total=0;
  for (let i=0; matrix[0].length; i++){
    for(let x=0; x < matrix.length; x++){
      if (matrix[i][x] === 0){
        break;
      }
      total+=matrix[i][x];
    }
  }
  return total;
}

module.exports = {
  getMatrixElementsSum
};
