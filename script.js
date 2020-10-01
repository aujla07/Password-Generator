var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // password array

  var password = [];

  //character options

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericalcharacters = "0123456789";
  var specialcharacters ="!@#$%^&*";

// tests

  console.log(lowercase)
  console.log(uppercase)
  console.log(specialcharacters)

  // var plength = 8;

  var plength = prompt("Please enter how long you want your password", "8");


//promt the users to use lowercase
//prompt the users to use uppercase
//prompt the users to use numberical
//prompt the users to use specialcharacters 
//construct pool of characters

// for loop - picking random characters for the password 



for (var i = 0; i < plength; i++) {

  //make random index
  var randomindex = Math.floor(Math.random()*lowercase.length);
//test
  console.log(randomindex);

  //add random characters to the password array
  password.push(lowercase[randomindex],uppercase[randomindex],numericalcharacters[randomindex],specialcharacters[randomindex])
}
console.log(password);
return password.join("");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);