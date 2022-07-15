const readline = require("readline-sync");
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

console.log(input)

var shift = parseInt(readline.question('How many letters would you like to shift? '));

console.log(shift)

function cipher (str, num){
    num = num % 26;
    var lowerCaseString = str.toLowerCase()
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var newStr = ''
    for (let i = 0; i < lowerCaseString.length; i++){
        var currentLetter = lowerCaseString[i]
        if (currentLetter === ' '){
            newStr += currentLetter
            continue
        }
        var currentIndex = alphabet.indexOf(currentLetter)
        var newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26
        if (newIndex < 0) newIndex = newIndex + 26
        if (str[i] === str[i].toUpperCase()){
            newStr += alphabet[newIndex].toUpperCase()
        }
        else newStr += alphabet[newIndex]
    }
    console.log(newStr)
}
cipher(input, shift)