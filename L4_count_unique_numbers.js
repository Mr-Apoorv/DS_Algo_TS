//Count Unique Numbers
//
//[1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]
//
//output->8
//conditions
//i=0, j=1
//array[i]===array[j]->j++
//array[i]!==array[j]->
//1. i++
//2. arr[i]=arr[j];

function countUniqueNumbers(array) {
  if (array.length) {
    let i = 0;
    for (j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is empty");
  }
}

let result = countUniqueNumbers([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(result);

//o(n)-> linear time complexity
