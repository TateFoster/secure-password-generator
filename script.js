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
    var characterInclusions = function(){
      var lowercaseInclude = confirm("Would you like to include lowercase letters?")
      var uppercaseInclude = confirm("Would you like to include uppercase letters?")
      var numerialsInclude = confirm("Would you like to include numerals?")
      var specialCharsInclude = confirm("Would you like to include speical characters?")
      if (lowercaseInclude || uppercaseInclude || numerialsInclude || specialCharsInclude){
        
        var combineChars = function() {
          if (lowercaseInclude && !uppercaseInclude && !numerialsInclude && !specialCharsInclude) {
            var lowercasePassword = function() {
              var lowercasePasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
               lowercasePasswordReady += lowercase[Math.floor(lowercase.length * Math.random())];
              return lowercasePasswordReady;
            }
            
            var passwordLower = lowercasePassword();
            // console.log(passwordLower);S
            return passwordLower;
            
          } else if (!lowercaseInclude && uppercaseInclude && !numerialsInclude && !specialCharsInclude) {
            var uppercasePassword = function() {
              var uppercasePasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
               uppercasePasswordReady += upppercase[Math.floor(upppercase.length * Math.random())];
              return uppercasePasswordReady;
            }
            var passwordUpper = uppercasePassword();
            return passwordUpper;
          } else if (!lowercaseInclude && !uppercaseInclude && numerialsInclude && !specialCharsInclude) {
            var numerialsPassword = function() {
              var numerialsPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
               numerialsPasswordReady += numerials[Math.floor(numerials.length * Math.random())];
              return numerialsPasswordReady;
            }

            var passwordNum =numerialsPassword();
            return passwordNum
          } else if (!lowercaseInclude && !uppercaseInclude && !numerialsInclude && specialCharsInclude) {
            var specialCharsPassword = function() {
              var specialCharsPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
              specialCharsPasswordReady += specialChars[Math.floor(specialChars.length * Math.random())];
              return specialCharsPasswordReady;
            }

            var passwordSpecial = specialCharsPassword();
            return passwordSpecial;

          } else if (lowercaseInclude && uppercaseInclude && !numerialsInclude && !specialCharsInclude) {
            var lowerUpper = lowercase.concat(upppercase);

            var lowerUpperPassword = function() {
              var lowerUpperPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
              lowerUpperPasswordReady += lowerUpper[Math.floor(lowerUpper.length * Math.random())];
              var lowerUpperTest = lowerUpperPasswordReady.split("")
              console.log(lowerUpperTest)
              console.log(lowerUpperTest.includes(lowercase))
              console.log(lowerUpperTest.includes(upppercase))
              if (lowerUpperTest)
              return lowerUpperPasswordReady;
            }
            var passwordLowerUpper = lowerUpperPassword();
            return passwordLowerUpper;
        
          }
        
        }
        var passwordCombine = combineChars();
        return passwordCombine;
    
      } else {
        alert("Must choose at least one character type.");
      }
    }
    
    
    var passwordReady = characterInclusions();
    return passwordReady;

  } else { alert("Length must be between 8 to 128 characters.");

  }
}
