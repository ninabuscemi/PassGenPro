// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  // Password requirement prompts
  var specialSymbols = confirm("Your password requires at least one symbol. Click OK to include symbols!");
  var numeric = confirm("Your password requires at least one number. Click OK to include numbers!");
  var upperCaseABC = confirm("Your password requires at least one uppercase letter. Click OK to include uppercase letters!");
  var lowerCaseABC = confirm("Your password requires at least one lowercase letter. Click OK to include lowercase letters!");
  var keyLength = prompt("Enter the length of your password (between 8 and 128 characters):");

  // Characters allowed for password
  var numericChars = "0123456789";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()?.<>|=+:;,[-_]";

  if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
    alert("Password length must be a number between 8 and 128 characters. Please try again.");
    return "Invalid password length.";
  }

  if (!numeric && !upperCaseABC && !lowerCaseABC && !specialSymbols) {
    alert("You must select at least one type of character for the password.");
    return "No criteria selected.";
  }

  // Build the character set based on user criteria
  var charSet = "";
  if (numeric) charSet += numericChars;
  if (upperCaseABC) charSet += upperCaseChars;
  if (lowerCaseABC) charSet += lowerCaseChars;
  if (specialSymbols) charSet += specialChars;

  // Generates the password
  var password = "";
  for (var i = 0; i < keyLength; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }

  return password;
}

// Function to write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

