/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
*/


var myName = 'Jade';
var friendName = 'Hayden'
console.log(myName.length);
console.log(friendName.length);



/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/

if (myName > friendName) {
    console.log('Jade has a longer name');
} else {
    console.log('Hayden is longer');
}


}
    
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/