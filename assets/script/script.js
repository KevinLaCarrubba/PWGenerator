// https://www.w3schools.com/jsref/jsref_fromcharcode.asp
// learning to use charcode to fill an array
//https://www.w3schools.com/charsets/ref_html_ascii.asp char code list
const lowerCaseArray_charCodes = addToArray(97, 122);
const upperCaseArray_charCodes = addToArray(65, 90);
const numberArray_charCodes = addToArray(48, 57);
//special character char code is spaced out so use concat array to connect all to one
const specialCharArray_charCodes = addToArray(33, 47).concat(
  addToArray(58, 64)
);
console.log(lowerCaseArray_charCodes);
console.log(upperCaseArray_charCodes);
console.log(numberArray_charCodes);
console.log(specialCharArray_charCodes);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(
    passwordLength,
    includeUppercase,
    includeNumbers,
    includeSpecialChar
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", (writePassword) => {
  var passwordLength = charChoice();
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
  } else {
    alert("The password length must be between 8 and 123 characters.");
  }
});

//Function to prompy PW enter
function charChoice() {
  return parseInt(
    prompt(
      "How many characters would you like the password to be ?, Enter a value between 8 and 128."
    )
  );
}
// https:forum.freecodecamp.org/t/push-new-element-into-array-using-for-loop/225401
// pushing the char code from a for loop to array
//Function to add characters to array.
function addToArray(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}
