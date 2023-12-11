// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){

  // Password requirement prompts
  var symbols = confirm("Your password requires atleast one symbol. Click OK to continue.");
  var numbers = confirm("Your password requires atleast one number. Click OK to continue.");
  var UpperCase = confirm("Your password requires atleast one letter. Click OK to continue.");
  var LowerCase = confirm("Your password requires atleast one lowercase letter. Click OK to continue.");
  var keyLength = confirm("Your password requires atleast one symbol. Click OK to continue.");

  // Password allowable characters
  var numeric = "0123456789"
  var upperCaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseABC = "abcdefghijklmnopqrstuvwxyz";
  var specialSymbols = "!@#$%^&*()?.<\>|=+:;,[-_]"
  var multiSelect =[];

}
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
