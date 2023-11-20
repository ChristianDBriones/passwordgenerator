// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;

function receivePasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters would you like in your password?(8-128)"))


  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Characters should be greater than 8 or less than 128")
    return null;
  }

  
  if (isNaN(passwordLength)) {
    window.alert("Please enter a number")
    return null;
  }
  
  if (!passwordLength) {
    window.alert("enter a character")
  }
  
  console.log("passwordLength:", passwordLength)
  
  var hasLower = confirm("Would you like lowercase in your password?")
  var hasUpper = confirm("Would you like uppercase in your password?")
  var hasNumeric = confirm("Would you like numerical characters in your value?")
  var hasSpecial = confirm("Would you like any special characters?")
  
  var passwordOptions ={
    passwordLength: passwordLength, hasLower:hasLower, hasUpper:hasUpper, hasNumeric:hasNumeric, hasSpecial
  }
console.log ("passowordOptions", passwordOptions)
return passwordOptions
}

    function generatePassword() {
      var answeredOptions = receivePasswordOptions()
      console.log (answeredOptions);
    return "christian"
    } 


  var charset ="";
  var lowerCharset = "abcdefghijklmnopqrstuvwxyz";
  var upperCharset = "ABCDEFGHHIJKLMNOPQRSTUVWXYZ";
  var numericCharset = "0123456789";
  var specialCharset = "!@#$%^&*()_-+=<>?";

 // if(hasLower) {
  //   charset += lowerCharset;
  // }
  // if (hasUpper) {
  //   charset += upperCharset;
  // }
  // if (hasNumeric) {
  //   charset += numericCharset;
  // }
  // if (hasSpecial) {
  //   charset += specialCharset;
  // }
//
  var password = "";
  // for (var i =0; i < passwordLength; i++) {
  //   var randomIndex = Math.floor (Math.random()  * charset.passwordLength); 
  //   password += charset [randomIndex];
  // }
  // return password;
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
  event.preventDefault();
  writePassword();
});
