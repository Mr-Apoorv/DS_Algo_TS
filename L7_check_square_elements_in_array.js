//Checking Square of elements of first array is present in second array
//arr1=[1,2,3,4], arr2[1,9,4,16]

//if(arr1[i]*arr[i]===arr2[j])
//let isSquare=true

function isSquareCheck(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    let isSquare = false;
    let square = array1[i] * array1[i];

    console.log(square);

    for (j = 0; j < array2.length; j++) {
      if (square === array2[j]) {
        isSquare = true;
      } else if (j === array2.length - 1 && isSquare === false) {
        return false;
      }
    }
  }
  return true;
}

let result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
console.log(result);

//quadratic time complexity o(n^2);
