/* BRONZE
    - Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.
*/
//let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < alphabet.length; i++){
    console.log(alphabet[i]);
}

/* SILVER
    - Write a conditional that is nested inside of the for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.log the letter. If the index is odd, console.log 'the index is an odd number'.
*/

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (var i=0; i<=25; i++) {
    if (i === 0) {
            console.log('Even:',alphabet[i]);
    }
    else if (i % 2 === 0) {
            console.log('Even:',alphabet[i]);   
    }
    else {
        console.log(i + "the index is an odd number");
}
  
}

//could have written if(i % 2 === 0) {
   //console.log('EVEN:', alphabet[i]);
//}
//I missed the [i]  and 'Even'

/* GOLD
    - Declare a globally scoped variable of arr that is initialized as an empty array. If the index of the character in the alphabet array is even, add that character to the variable of arr, and console.log arr. If the index is odd - using string interpolation - console.log 'the index ___ is an odd number'.
    - Use Google to search for an array method that allows you to add one or more elements to an array
*/

for(index in alphabet) {
    if(i % 2 === 0) {
        //console.log(arr):
        Array.push(alphabet[index]);
    } else {
        console.log('The index ${index} is an odd number');
    
    }
    
}
consol