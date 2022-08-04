// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variable declartions
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numerials = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"];

var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "."];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 


  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function() {
  var passwordLength = parseInt(prompt("How long would you like your password? (Min 8 char - max 128 char)"))
  if (passwordLength >= 8 && passwordLength <= 128) {
    characterInclusions();

  } else { alert("Length must be between 8 to 128 characters.");

  }
}

var characterInclusions = function(){
  var lowercaseInclude = confirm("Would you like to include lowercase letters?")
  var uppercaseInclude = confirm("Would you like to include uppercase letters?")
  var numerialsInclude = confirm("Would you like to include numerals?")
  var specialCharsInclude = confirm("Would you like to include speical characters?")
  if (lowercaseInclude || uppercaseInclude || numerialsInclude || specialCharsInclude){
    combineChars();

  } else {
    alert("Must choose at least one character type.");
  }
}

var combineChars = function() {
  if (lowercaseInclude && !uppercaseInclude && !numerialsInclude && !specialCharsInclude) {
    lowercasePassword();
  } else if (!lowercaseInclude && uppercaseInclude && !numerialsInclude && !specialCharsInclude) {
    upppercasePassword();
  } else if (!lowercaseInclude && !uppercaseInclude && numerialsInclude && !specialCharsInclude) {
    numerialsPassword();
  } else if (!lowercaseInclude && !uppercaseInclude && !numerialsInclude && specialCharsInclude) {
    specialCharsPassword();
  } else if (lowercaseInclude && uppercaseInclude && !numerialsInclude && !specialCharsInclude) {
    var lowerUpper = lowercase.concat(upppercase);

  }

}

var lowercasePassword = function() {
  var lowercasePassword = lowercase[Math.floor(lowercase.length * Math.random())];
  return 
}

var uppercasePassword = function() {

}

var numerialsPassword = function() {

}
var specialCharsPassword = function() {

}
var numerialsPassword = function() {

}
var numerialsPassword = function() {

}