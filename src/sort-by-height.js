const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(a) {
  var array2=a;
  array2=array2.filter((element)=>{
    if(element !=-1){
      return element;
    }
  }).sort((a,b)=>{
    return a-b;
  });
  var indexVal=0;
  for(var i=0; i< a.length; i++){
    if(a[i] != -1){
      a[i]=array2[indexVal];
      indexVal++;
    }
  }
  return a;
}

module.exports = {
  sortByHeight
};
