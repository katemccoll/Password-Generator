// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// My Work
// Do I need to put these in a array?
var number = "1234567890"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var options = {
  number: true,
  upperCase: true,
  lowerCase: true,
  specialCharacters: true,
  // length: true,
}

var characters = Math.ceil(Math.random() * options.length);
var computerChoice = options[index];





