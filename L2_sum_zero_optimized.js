//checking sum zero - problem 1
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] - input
//[?,?]- output - any two values from array which gives sum equal to 0 (first pair only)

//Expected ans - [-4, 4]

function getSumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let result = getSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

//o(n) linear time complexity
