var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  }  
  // password array
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['@', '#', '$', '%', '^', '&', '*']
var pass = []

// function to reset the password
function startReset() {
  pass =[];
  writePassword()
}

// funtion to generate the password
function generatePassword() {

  // Ask the user to enter a password length
  passwordLength = parseInt(prompt("Please choose a password length from 8 to 128 characters"));

  // Alert If the user entry is not valid
  if (passwordLength === null || passwordLength === "" || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128 ) {
    alert("Lenth has to be between 8 to 128 characters.")
    return generatePassword();
  }

  // password options
  var passwordUpper = confirm("Would you like to include upper case letters?")
  var passwordLower = confirm("Would you like to include lower case letters?")
  var passwordNumber = confirm("Would you like to include numbers?")
  var passwordSymbols = confirm("Would you like to include special characters?")
  
//  Alert for not selecting options
  if (!passwordUpper, !passwordLower, !passwordNumber, !passwordSymbols){
    alert("Please select atleast one option for password characters")
    return generatePassword();
  }

  // Collecting the data
  var passChoices= []
  if (passwordUpper) {
    passChoices = passChoices.concat(upperCase)
  }
  if (passwordLower) {
    passChoices = passChoices.concat(lowerCase)
  }
  if (passwordNumber) {
    passChoices = passChoices.concat(number)
  }
  if (passwordSymbols) {
    passChoices = passChoices.concat(symbols)
  }

  // Generating a random password 
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passChoices.length);
    var character = passChoices[randomNumber]
    pass.push(character)
  }

  return pass.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", startReset);
