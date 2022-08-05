// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variable declartions
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numerials = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"];

var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "."];




// var passwordLengthTrue;
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    console.log(password);

    passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function () {
    var passwordLength = parseInt(prompt("How long would you like your password? (Min 8 char - max 128 char)"))
    if (!passwordLength >= 8 && !passwordLength <= 128) { 
        alert("Length must be between 8 to 128 characters.");
    } 

var characterOptions = [];
var lowercaseInclude = confirm("Would you like to include lowercase letters?")
    
if (lowercaseInclude) {
    characterOptions = characterOptions.concat(lowercase);
}

var uppercaseInclude = confirm("Would you like to include uppercase letters?")
if (uppercaseInclude) {
    characterOptions = characterOptions.concat(uppercase);
}
var numerialsInclude = confirm("Would you like to include numerals?")
if (numerialsInclude) {
    characterOptions = characterOptions.concat(numerials);
}
var specialCharsInclude = confirm("Would you like to include speical characters?")
if (specialCharsInclude) {
    characterOptions = characterOptions.concat(specialChars);
}
if (!lowercaseInclude && !uppercaseInclude && !numerialsInclude && !specialCharsInclude) {
    alert("Must choose at least one character type.");
}
// var choicePicker = function () {
        var randomPassword = [];
        for (var i = 0; i < passwordLength; i++) {
        randomPassword.push(characterOptions[Math.floor(characterOptions.length * Math.random())]);
        }
        
        if (lowercaseInclude) {
        console.log(randomPassword.some(item => lowercase.includes(item)))
        }
        if (uppercaseInclude)
        

        
        return randomPassword.join('');
        }
      