// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variable declartions
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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
               uppercasePasswordReady += uppercase[Math.floor(uppercase.length * Math.random())];
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
            var lowerUpper = lowercase.concat(uppercase);

            var lowerUpperPassword = function() {
              var lowerUpperPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
              lowerUpperPasswordReady += lowerUpper[Math.floor(lowerUpper.length * Math.random())];
              var lowerUpperTest = lowerUpperPasswordReady.split("")
              
              
              if (lowerUpperTest.some(item => lowercase.includes(item)) && lowerUpperTest.some(item => uppercase.includes(item))) {
              return lowerUpperPasswordReady;
              } else {
                lowerUpperPassword();
              }
            } 
            var passwordLowerUpper = lowerUpperPassword();
            return passwordLowerUpper;
        
          } else if (lowercaseInclude && !uppercaseInclude && numerialsInclude && !specialCharsInclude) {
            var lowerNum = lowercase.concat(numerials);

            var lowerNumPassword = function() {
              var lowerNumPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
              lowerNumPasswordReady += lowerNum[Math.floor(lowerNum.length * Math.random())];
              var lowerNumTest = lowerNumPasswordReady.split("")
              
              
              if (lowerNumTest.some(item => lowercase.includes(item)) && lowerNumTest.some(item => numerials.includes(item))) {
              return lowerNumPasswordReady;
              } else {
                lowerNumPassword();
              }
            } 
            var passwordLowerNum = lowerNumPassword();
            return passwordLowerNum;
        
          } else if (lowercaseInclude && !uppercaseInclude && !numerialsInclude && specialCharsInclude) {
            var lowerSpecial = lowercase.concat(specialChars);

            var lowerSpecialPassword = function() {
              var lowerSpecialPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
              lowerSpecialPasswordReady += lowerSpecial[Math.floor(lowerSpecial.length * Math.random())];
              var lowerSpecialTest = lowerSpecialPasswordReady.split("")
              
              
              if (lowerSpecialTest.some(item => lowercase.includes(item)) && lowerSpecialTest.some(item => specialChars.includes(item))) {
              return lowerSpecialPasswordReady;
              } else {
                lowerSpecialPassword();
              }
            } 
            var passwordLowerSpecial = lowerSpecialPassword();
            return passwordLowerSpecial;
        
          } else if (!lowercaseInclude && uppercaseInclude && numerialsInclude && !specialCharsInclude) {
            var upperNum = uppercase.concat(numerials);

            var upperNumPassword = function() {
              var upperNumPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
              upperNumPasswordReady += upperNum[Math.floor(upperNum.length * Math.random())];
              var upperNumTest = upperNumPasswordReady.split("")
              
              
              if (upperNumTest.some(item => uppercase.includes(item)) && upperNumTest.some(item => numerials.includes(item))) {
              return upperNumPasswordReady;
              } else {
                upperNumPassword();
              }
            } 
            var passwordUpperNum = upperNumPassword();
            return passwordUpperNum;
        
          } else if (!lowercaseInclude && uppercaseInclude && !numerialsInclude && specialCharsInclude) {
            var upperSpecial = uppercase.concat(specialChars);

            var upperSpecialPassword = function() {
              var upperSpecialPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
              upperSpecialPasswordReady += upperSpecial[Math.floor(upperSpecial.length * Math.random())];
              var upperSpecialTest = upperSpecialPasswordReady.split("")
              
              
              if (upperSpecialTest.some(item => uppercase.includes(item)) && upperSpecialTest.some(item => specialChars.includes(item))) {
              return upperSpecialPasswordReady;
              } else {
                upperSpecialPassword();
              }
            } 
            var passwordUpperSpecial = upperSpecialPassword();
            return passwordUpperSpecial;
        
          } else if (!lowercaseInclude && !uppercaseInclude && numerialsInclude && specialCharsInclude) {
            var numSpecial = numerials.concat(specialChars);

            var numSpecialPassword = function() {
              var numSpecialPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
              numSpecialPasswordReady += numSpecial[Math.floor(numSpecial.length * Math.random())];
              var numSpecialTest = numSpecialPasswordReady.split("")
              
              
              if (numSpecialTest.some(item => numerials.includes(item)) && numSpecialTest.some(item => specialChars.includes(item))) {
              return numSpecialPasswordReady;
              } else {
                numSpecialPassword();
              }
            } 
            var passwordNumSpecial = numSpecialPassword();
            return passwordNumSpecial;
        
          } else if (lowercaseInclude && uppercaseInclude && numerialsInclude && !specialCharsInclude) {
            var lowerUpperNum = lowercase.concat(uppercase.concat(numerials));

            var lowerUpperNumPassword = function() {
              var lowerUpperNumPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
              lowerUpperNumPasswordReady += lowerUpperNum[Math.floor(lowerUpperNum.length * Math.random())];
              var lowerUpperNumTest = lowerUpperNumPasswordReady.split("")
              
              
              if (lowerUpperNumTest.some(item => lowercase.includes(item)) && lowerUpperNumTest.some(item => uppercase.includes(item)) && lowerUpperNumTest.some(item => numerials.includes(item))) {
              return lowerUpperNumPasswordReady;
              } else {
                lowerUpperNumPassword();
              }
            } 
            var passwordLowerUpperNum = lowerUpperNumPassword();
            return passwordLowerUpperNum;
        
          } else if (lowercaseInclude && uppercaseInclude && !numerialsInclude && specialCharsInclude) {
            var lowerUpperSpecial = lowercase.concat(uppercase.concat(specialChars));

            var lowerUpperSpecialPassword = function() {
              var lowerUpperSpecialPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
              lowerUpperSpecialPasswordReady += lowerUpperSpecial[Math.floor(lowerUpperSpecial.length * Math.random())];
              var lowerUpperSpecialTest = lowerUpperSpecialPasswordReady.split("")
              
              
              if (lowerUpperSpecialTest.some(item => lowercase.includes(item)) && lowerUpperSpecialTest.some(item => uppercase.includes(item)) && lowerUpperSpecialTest.some(item => specialChars.includes(item))) {
              return lowerUpperSpecialPasswordReady;
              } else {
                lowerUpperSpecialPassword();
              }
            } 
            var passwordLowerUpperSpecial = lowerUpperSpecialPassword();
            return passwordLowerUpperSpecial;
        
          } else if (lowercaseInclude && !uppercaseInclude && numerialsInclude && specialCharsInclude) {
            var lowerNumSpecial = lowercase.concat(numerials.concat(specialChars));

            var lowerNumSpecialPassword = function() {
              var lowerNumSpecialPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
              lowerNumSpecialPasswordReady += lowerNumSpecial[Math.floor(lowerNumSpecial.length * Math.random())];
              var lowerNumSpecialTest = lowerNumSpecialPasswordReady.split("")
              
              
              if (lowerNumSpecialTest.some(item => lowercase.includes(item)) && lowerNumSpecialTest.some(item => numerials.includes(item)) && lowerNumSpecialTest.some(item => specialChars.includes(item))) {
              return lowerNumSpecialPasswordReady;
              } else {
                lowerNumSpecialPassword();
              }
            } 
            var passwordLowerNumSpecial = lowerNumSpecialPassword();
            return passwordLowerNumSpecial;
        
          } else if (!lowercaseInclude && uppercaseInclude && numerialsInclude && specialCharsInclude) {
            var upperNumSpecial = uppercase.concat(numerials.concat(specialChars));

            var upperNumSpecialPassword = function() {
              var upperNumSpecialPasswordReady = "";
              for (var i = 0; i < passwordLength; i++)
              upperNumSpecialPasswordReady += upperNumSpecial[Math.floor(upperNumSpecial.length * Math.random())];
              var upperNumSpecialTest = upperNumSpecialPasswordReady.split("")
              console.log(upperNumSpecialPasswordReady)
              
              if (upperNumSpecialTest.some(item => uppercase.includes(item)) && upperNumSpecialTest.some(item => numerials.includes(item)) && upperNumSpecialTest.some(item => specialChars.includes(item))) {
              return upperNumSpecialPasswordReady;
              } else {
                upperNumSpecialPassword();
              }
            } 
            var passwordUpperNumSpecial = upperNumSpecialPassword();
            return passwordUpperNumSpecial;
        
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
