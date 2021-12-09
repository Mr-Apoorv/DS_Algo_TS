// Recursion -  when function call itself - HOW - by calling the function from inside of its definition
// if a function call itself then there must be an end point
// otherwise it will get called for infinite times

let counter = 1;

function demo(number) {
  if (counter > number) {
    // condition to break the loop
    return;
  }

  console.log("hello " + counter);
  counter++;

  demo(number); //fn called inside its own definition
}

demo(10); //fn call
