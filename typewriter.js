const sentence = "hello there from lighthouse labs";
let delay=0

for (const char of sentence) {
//  console.log(char);
//process.stdout.write 

setTimeout(() => {

  process.stdout.write(char)

}, delay) 
delay= delay+50    // <= 1s delay to make it noticeable. Can dial it down later.
}

// Replace the console.log with process.stdout.write and confirm our results.
//Add a setTimeout call within the loop, to delay the character output a bit.


