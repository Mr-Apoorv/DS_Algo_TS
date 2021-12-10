//Bubble sort (sorting ...)
// A sorting algorithm where the largest values bubble up at the top or rightest corner.

//it compares two consecutive elements
// if a>b push the larger no to the right/top
// else if a<b it will just check for next 2 no and repeat the process
// this cycle is repeated till no Elements are left to swap

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

const result = bubbleSort([5, 4, 2, 3, 69, 7, 5, 25, 765, 2, 156, 63, 45]);
console.log(result);

//quadratic time complexity o(n^2)
