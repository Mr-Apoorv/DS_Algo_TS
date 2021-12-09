//Divide & conquerer technique
// find the index of given no in a sorted array 7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]=>index 6 =>output

//min=0, element - 1,
//max=array.length-1, element = 15,
// midIndex=(min+max)/2 => (0+14) => 7(index), element=8

// if array[midIndex] < number(7)
// min=midIndex+1;

// else if array[midIndex]>number(7)
//max=midIndex-1, min=0, max=6 {1,2,3,4,5,6,7}
//(min+max)/2 => 3
// index+1 => 4 (min), max=6 {5,6,7}

//(min+max)/2 => 5+1 => 6 (min), max=6
//(min+max)/2=> 6

//else midIndex => 6, element=7

function searchNum(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);

    if (arr[midIndex] < num) {
      min = midIndex + 1;
    } else if (arr[midIndex] > num) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

let result = searchNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
console.log(result);

// time complexity binary o(log(n))
