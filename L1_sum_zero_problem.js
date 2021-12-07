//checking sum zero - problem 1
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] - input
//[?,?]- output - any two values from array which gives sum equal to 0 (first pair only)

//Expected ans - [-4, 4]

function getSumZero(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log("outer loop");
    for (j = 0; j < arr.length; j++) {
      console.log("inner loop");
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

const result = getSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

//o(n^2) quadratic time complexity
