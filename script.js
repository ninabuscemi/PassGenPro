// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){

// Password requirement prompts
var specialSymbols = confirm("Your password requires atleast one symbol. Click OK to continue!");
var numeric = confirm("Your password requires atleast one number. Click OK to continue!");
var upperCaseABC = confirm("Your password requires atleast one letter. Click OK to continue!");
var lowerCaseABC = confirm("Your password requires atleast one lowercase letter. Click OK to continue!");
var keyLength = confirm("Your password must be between 8 and 128 characters. Click OK to continue!");

// Characters allowed for password
var numeric ="0123456789"
var upperCaseABC ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseABC ="abcdefghijklmnopqrstuvwxyz";
var specialSymbols ="!@#$%^&*()?.<\>|=+:;,[-_]"
var multiSelect =[];

// User meeting criteria
if (keyLength < 8 || keyLength > 128) {
  alert("Your password does not meet the requirements.");
  var keyLength = prompt("Password must be between 8 and 128 characters.");
}

if (numeric === false && upperCaseABC === false && lowerCaseABC === false && specialSymbols === false) {
  return "Your password does not meet the requirements";
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}
