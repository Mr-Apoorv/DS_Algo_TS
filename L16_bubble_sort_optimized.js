//in previous lesson the bubble sort logic is correct but not optimised
// example - Array to sort = [8,1,2,3,4,5,6,7]
// for above array we only need one cycle to push 8 to last and then array will be sorted
// but with L15 logic it will run complete 8 cycles even though there will be no swap or changes after 1st cycle
// to optimise this we can include a check that if there is no swapping taking place in a cycle then loop should break in that cycle.
// this way we can decrease no of cycles and loops and thus sorting time .

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    console.log(i);
    let isSwapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return arr;
}

let res = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
console.log(res);
