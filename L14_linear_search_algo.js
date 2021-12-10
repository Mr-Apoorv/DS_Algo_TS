// Linear search algorithms

const users = [
  { username: "sun", email: "sunstar@gmail.com" },
  { username: "abc", email: "abc@gmail.com" },
  { username: "xyz", email: "xyz@gmail.com" },
];

function searchWord(array, key) {
  //   for (i = 0; i < array.length; i++) {
  //     if (array[i].username === key) {
  //       return true;
  //     }
  //   }

  for (let item of array) {
    if (item["username"] === key) {
      return true;
    }
  }

  return false;
}

const res = searchWord(users, "abc");
console.log(res);

//time complexity - linear o(n);
