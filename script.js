// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var Numbers = "1234567890".split("")
var specialCharacters = ["!","\u0022","#","$","%","&","'","(",")","*","+",",","-",
".","/",":",";","<","=",">","?","@","[","\u005C","]","^","_","`","{",
"|", "}","~",]

var tempArray = []



function generatePassword() {
  var passwordLength = prompt("How long would you like your password?");
  var passwordCharacters = confirm("Would you like any special characters?");
  var passwordNumbers = confirm("Would you like to add any Numbers?");
  var passwordUppercase = confirm("Would you like to add a uppercase letter?");
  var passwordLowercase = confirm("Would you like add a lowercase letter?");

  if(passwordLength >8 && passwordLength <128){
    console.log("yo i work")
    
   } else {
    alert("Password Doesnt meet Requirement. It should be 8-128 characters long.")
   }

   if (passwordCharacters === true) {
    console.log("Character yes")
    tempArray.push(...specialCharacters)
   }

   if (passwordNumbers === true) {
    console.log("Numbers yes")
    tempArray.push(...Numbers)
   }

   if (passwordUppercase === true) {
    console.log("Uppercase yes")
    tempArray.push(...upperCase)
   }

   if (passwordLowercase === true) {
    console.log("Lowercase yes")
    tempArray.push(...lowerCase)
   }
   console.log(tempArray)
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
