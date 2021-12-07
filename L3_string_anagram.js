//String Anagram
//hello->llheo       +ve
//ajay->aaay         -ve

//condition
//length check (for both strings)
//String "hello"
//{h:1, e:1, l:2, o:1}

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let letterHolder = {};
  for (let letter of string1) {
    letterHolder[letter] = (letterHolder[letter] || 0) + 1;
    console.log(letterHolder);
  }
  for (let items of string2) {
    if (!letterHolder[items]) {
      console.log(items);
      return false;
    }
    letterHolder[items] = letterHolder[items] - 1;
    console.log(letterHolder);
  }

  return true;
}

let result = isAnagram("hello", "llheo");
console.log(result);

//linear time complexity - o(n) - because we don't have nested loops , both loops are seperate
