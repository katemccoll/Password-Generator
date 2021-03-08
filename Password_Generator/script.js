// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var number = "1234567890";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var options = {
    number: true,
    upperCase: true,
    lowerCase: true,
    symbols: true,
    length: 12,
  };

  var stringOptions = "";

  if (options.number) {
    stringOptions += number;
  }

  if (options.upperCase) {
    stringOptions += upperCase;
  }

  if (options.lowerCase) {
    stringOptions += lowerCase;
  }

  if (options.symbols) {
    stringOptions += symbols;
  }

  var password = "";

  for (var i = 0; i < options.length; i++) {
    var randomIndex = Math.floor(Math.random() * stringOptions.length);
    password += stringOptions[randomIndex];
  }

  return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





