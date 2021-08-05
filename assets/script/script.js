// Array of upperCase characters
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Array of lowerCase characters
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of numerical characters
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of special characters
var specialCharacters = [
  "+",
  "-",
  "&",
  "|",
  "!",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "^",
  "~",
  "*",
  "?",
  ":",
  "#",
];
//Function to prompt user for password options.

function getUserOptions() {
  var passwordLength = prompt(
    "How many characters would you like the password to be ?, Enter a value between 8 and 128."
  );
  //Set user input to integer. Run conditional statement to make sure it is an actual number. Run conditional statement to make sure it is larger than 8 and less tham 128.
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength)) {
    alert("You can only enter the length in numbers.");
    return writePassword();
  } else {
    if (passwordLength < 8 || passwordLength > 128) {
      alert("You did not enter a correct value.");
      return writePassword();
    }
  }

  //Create an object to store userinput
  var userOptions = {
    passwordLength: passwordLength,
    lowerCaseChar: [],
    upperCaseChar: [],
    specialChar: [],
    numericalChar: [],
  };
  //Prompt to ask user if they would like to add lowercase characters.
  if (
    confirm("Would you like to add lowercase characters in your password ?")
  ) {
    userOptions.lowerCaseChar = true;
  }
  //Promt to ask user if they would like to add uppercase characters.
  if (
    confirm("Would you like to add uppercase characters in your password ?")
  ) {
    userOptions.upperCaseChar = true;
  }
  //Prompt user to ask if they would like numbers in their password.
  if (confirm("Would you like to add numbers into your password ?")) {
    userOptions.numericalChar = true;
  }
  //Prompt user to ask if they would like special characters in their password.
  if (confirm("Would you like to add special characters in your password ?")) {
    userOptions.specialChar = true;
  }
  return userOptions;
}
//Function to randomize an array
function randomizeArray(randomArray, pwLength) {
  var generatedArray = randomArray
    .sort(() => Math.random() - Math.random())
    .slice(0, pwLength);
  return generatedArray;
}

//Function to generate a password with the user input.
function generatePassword() {
  var userOptions = getUserOptions();
  var results = [];
  var possibleCharacters = [];
  var guranteedChacarters = [];
  if (userOptions.lowerCaseChar === true) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
  }
  if (userOptions.upperCaseChar === true) {
    possibleCharacters = possibleCharacters.concat(upperCase);
  }
  if (userOptions.numericalChar === true) {
    possibleCharacters = possibleCharacters.concat(numericalCharacters);
  }
  if (userOptions.specialChar === true) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  console.log(possibleCharacters);
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
