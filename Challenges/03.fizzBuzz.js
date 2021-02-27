/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

//if (FB / 3) {
    //write = "Fizz";
 //} else if (FB / 5) {
   // write = "Buzz";
// } else { (FB / 3) && (FB / 5) 
  // write = "Fizz Buzz";
 // }//

//Challenge part one
let FB = 100;

if(FB % 3 === 0 && FB % 5 === 0) {
    console.log('Fizz Buzz');
} else if (FB % 5 === 0) {
    console.log('Buzz');
} else if (FB % 3 === 0) {
    console.log('Fizz');
}

//Challenge part two
let fb = 15;

fb % 5 == 0 && fb % 3 == 0 ? console.log('Fizz Buzz') :
fb % 3 == 0 ? console.log('Fizz') :
fb % 5 == 0 ? console.log('Buzz') :
console.log(fb);

//Challenge part three

switch(true) {
    case (fb % 3 === 0 && fb % 5 === 0) :
        console.log('Fizz Buzz');
        break;
    case (fb % 5 === 0) :
        console.log('Buzz');
        break;
    case (fb % 3 ===0):
        console.log('FIzz');
        break;        
}