//let new string = arg.
//let newstring = '' -- Use this string to build solution.
//For loop to iterate throughout the string.
//Check if the char is a lowercase letter or special character.
//Add the character to the end of new string.
//Return new string.

function stripUpperCase(string) {
    
 let newstring='';
 
 for (let i = 0; i < string.length; i++) {
 if (string[i] === string[i].toLowerCase()) {newstring+=string[i]}
} 

return newstring;
}


console.log(stripUpperCase('Papa!%'));