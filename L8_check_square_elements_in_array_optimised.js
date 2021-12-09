//checking square in another array
//arr1=[1,2,3,4], arr2=[1,9,4,16] - Case 1
//arr1=[1,2,4,2], arr2=[1,4,4,16] - case 2

//map1={1:1, 2:2, 4:1}
//map2={1:1, 4:2, 16:1}

function checkSquare(arr1, arr2) {
  let map1 = {};
  let map2 = {};

  for (let item1 of arr1) {
    map1[item1] = (map1[item1] || 0) + 1;
  }

  for (let item2 of arr2) {
    map2[item2] = (map2[item2] || 0) + 1;
  }

  console.log("map1 ", map1, "map2 ", map2);

  for (let key in map1) {
    if (!map2[key * key]) {
      return false;
    } else if (map1[key] !== map2[key * key]) {
      return false;
    }
  }
  return true;
}

let result = checkSquare([1, 2, 4, 2], [1, 4, 4, 16]);
console.log(result);
