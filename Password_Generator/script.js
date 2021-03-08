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

  var passwordLength = window.prompt("How many characters in your password? Must be between 8 and 128 characters long");

  if (passwordLength.length == 0) {
    alert("Please add a value");
    return;
  }

  options.length = parseInt(passwordLength, 10);

  // todo: handle invalid numbers (e.g. "i am not a number")

  if (isNaN(options.length) || options.length < 8 || options.length > 128) {
    alert("Please choose between 8 and 128 character please");
    return;
  } else {
    options.lowerCase = window.confirm("Password Criteria: \nLower Case Letters?");
    options.upperCase = window.confirm("Upper Case Letters?");
    options.number = window.confirm("Numbers?");
    options.symbols = window.confirm("Special Characters?");
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





