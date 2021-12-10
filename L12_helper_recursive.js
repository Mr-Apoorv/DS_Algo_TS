// helper recursive function - function itself is not called recursively, but we create a child function inside of the main function which is called recursively.
// [1,2,3,4,5,6,7,8,9,10]
//[1,3,5,7,9] -- output - odd numbers
// number%2 !== 0

function findOdd(array) {
  let result = [];
  function helperRecursive(inputArray) {
    if (inputArray.length === 0) {
      return;
    } else if (inputArray[0] % 2 !== 0) {
      result.push(inputArray[0]);
    }

    helperRecursive(inputArray.slice(1)); //recursively call
  }

  helperRecursive(array); //1st time calling
  return result;
}

let res = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(res);
