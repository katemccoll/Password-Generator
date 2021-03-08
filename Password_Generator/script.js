function generatePassword() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  var lengthStr = window.prompt("How many characters in your password? Must be between 8 and 128 characters long");
  if (lengthStr.length == 0) {
    alert("Please add a value");
    return;
  }

  var passwordLength = parseInt(lengthStr, 10);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8 and 128 character please");
    return;
  }

  var useLowerCase = window.confirm("Password Criteria: \nLower Case Letters?");
  var useUpperCase = window.confirm("Upper Case Letters?");
  var useNumbers = window.confirm("Numbers?");
  var useSymbols = window.confirm("Special Characters?");

  var passwordAlphabet = "";

  if (useNumbers) {
    passwordAlphabet += "1234567890";
  }

  if (useUpperCase) {
    passwordAlphabet += alphabet.toUpperCase();
  }

  if (useLowerCase) {
    passwordAlphabet += alphabet.toLowerCase();
  }

  if (useSymbols) {
    passwordAlphabet += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

  if (passwordAlphabet.length == 0) {
    alert("Must choose at least one set of characters");
    return;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordAlphabet.length);
    password += passwordAlphabet[randomIndex];
  }

  return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  if (password !== undefined) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);





