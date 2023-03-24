// Assignment code here

function generatePassword() {
  var passwordLength = prompt("How long would you like your password?");
  var passwordCharacters = confirm("Would you like any special characters?");
  var passwordNumbers = confirm("Would you like to add any Numbers?");
  var passwordUppercase = confirm("Would you like to add a uppercase letter?");
  var passwordLowercase = confirm("Would you like add a lowercase letter?");
  
  console.log(passwordLength)
  console.log(passwordCharacters)
  // if(){

  // }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
