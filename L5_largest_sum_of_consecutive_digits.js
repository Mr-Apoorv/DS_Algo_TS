//[1,2,3,4,3,5,4,6,7,8]=> total elements - 10
// count largest sum of consecutive digits
// num = 4
// sum => 25

// conditions
// num > array.length -> error message
//10-4+1=> 7 (total elements - num of consecutive digits for sum +1) --> formula to get no of loops

function findLargest(arr, num) {
  if (num > arr.length) {
    throw new Error("Num cannot be greater than array");
  } else {
    let max = 0;
    for (i = 0; i < arr.length - num + 1; i++) {
      let temp = 0;
      for (j = 0; j < num; j++) {
        temp += arr[i + j]; //(did i+j because we have to start adding four digits from new value of i otherwise j will always start at 0 index)
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

let result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(result);

// quadratic time complexity
