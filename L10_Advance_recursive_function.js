// Sorting using Recursive function
//[2,3,1,4] - by default case
//[2,1,3,4] - case 1
//[1,2,3,4] - final output

//logic
// first we will check if elements are sorted or not-
// if already sorted we will directly return the array, this also act as end Point
// else if not sorted then we will check which 2 consecutive elements are not in increasing order
// if two elements are in increasing order then we will check next two
// else if two elements are not in increasing order than we will swap those two and again recheck array sorting from the start .

let myArray = [2, 3, 1, 4, 6, 14, 45, 12];
let finalArray = [];
let i = 0;
let j = 1;

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

function sortCheck(array) {
  if (isSorted(array)) {
    finalArray = [...array];
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    sortCheck(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    // console.log([array[i], array[j]]);
    i = 0;
    j = 1;
    sortCheck(array);
  }
}

sortCheck(myArray);
console.log(finalArray);
