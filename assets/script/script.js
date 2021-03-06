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
  if (passwordLength == null) {
    alert("Click generate to try again.");
    return;
  }
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
    lowerCaseChar: false,
    upperCaseChar: false,
    specialChar: false,
    numericalChar: false,
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
function randomizeArray(randomArray, Length) {
  var generatedArray = randomArray
    .sort(() => Math.random() - Math.random())
    .slice(0, Length);
  return generatedArray;
}

var possibleCharacters = {};
//Function to generate a password with the user input.
function generatePassword() {
  var userOptions = getUserOptions();
  // console.log(userOptions)
  // debugger;
  if (userOptions.lowerCaseChar === true) {
    possibleCharacters.lower = lowerCase;
    // console.log(possibleCharacters.lower)
  }
  if (userOptions.upperCaseChar === true) {
    possibleCharacters.upper = upperCase;
    // console.log(possibleCharacters.upper)
  }
  if (userOptions.numericalChar === true) {
    possibleCharacters.number = numericalCharacters;
    // console.log(possibleCharacters.number)
  }
  if (userOptions.specialChar === true) {
    possibleCharacters.special = specialCharacters;
    // console.log(possibleCharacters.special)
  }
  if (
    userOptions.lowerCaseChar !== true &&
    userOptions.upperCaseChar !== true &&
    userOptions.numericalChar !== true &&
    userOptions.specialChar !== true
  ) {
    alert("You must pick one character type to generate a passowrd.");
    return;
  }
  // console.log(possibleCharacters)
  //Take the amount of true statments
  var numberOfCharTypes = Object.keys(possibleCharacters).length;
  // console.log(numberOfCharTypes)
  //Divide the length of the password by number of true statements to see how manny to take out of each array
  var multiplier = Math.floor(userOptions.passwordLength / numberOfCharTypes);
  // console.log(multiplier)
  // console.log(possibleCharacters);
  var groupSet = [];
  Object.keys(possibleCharacters).forEach((name) => {
    var element = possibleCharacters[name];
    var randomParts = randomizeArray(element, multiplier);
    groupSet.push(randomParts);
  });

  var finalResult = [];
  groupSet.forEach((set) => {
    var pwFiller = [];
    // if only 1 is selected
    var joinedSet = set.join("");
    if (groupSet.length === 1) {
      for (var i = 0; i < userOptions.passwordLength; i++) {
        pwFiller += joinedSet.charAt(Math.floor(Math.random() * set.length));
      }
    } else {
      var currentSetMax = userOptions.passwordLength / numberOfCharTypes;
      for (var i = 0; i < currentSetMax; i++) {
        pwFiller += joinedSet.charAt(Math.floor(Math.random() * set.length));
      }
    }
    finalResult.push(pwFiller);
  });

  //Join all the arrays
  var joinArrays = finalResult.join().replaceAll(",", "").split("");
  // console.log(joinArrays)
  //Shuffle the array
  var theFinalArray = randomizeArray(joinArrays, joinArrays.length);

  // console.log(theFinalArray)

  return theFinalArray.join("");
}

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  //Clear object to alllow program to rerun
  possibleCharacters = {};

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
