// Assignment Code
const passwordOptions = {
  upperCase: [
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
  ],
  lowerCase: [
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
  ],
  number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacter: [
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
  ],
};
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like the password to be ?, Enter a value between 8 and 128."
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You did not enter a correct value.");
    return;
  }
  console.log(passwordLength);
  // var randomInt = Math.floor(Math.random() * passwordLength);
  var passwordCharacters = passwordOptions.lowerCase;
  console.log(passwordCharacters);
  if (confirm("Would you like to add Uppercase characters ?")) {
    passwordCharacters = passwordCharacters.concat(passwordOptions.upperCase);
    console.log(passwordCharacters);
  }
  if (confirm("Would you like to add numbers ?")) {
    passwordCharacters = passwordCharacters.concat(passwordOptions.number);
    console.log(passwordCharacters);
  }
  if (confirm("Would you like to add Special Characters ?")) {
    passwordCharacters = passwordCharacters.concat(
      passwordOptions.specialCharacter
    );
    console.log(passwordCharacters);
  }
  var genPword = passwordCharacters
    .sort(() => Math.random() - Math.random())
    .slice(0, passwordLength);
  // console.log(randomInt);
  // for (var i = 0; i < passwordLength; i++) {
  //   var pwGen = passwordCharacters[randomInt];
  //   console.log(pwGen);
  //   genPword.push(pwGen);
  //   console.log(genPword);
  // }
  return genPword.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//2. Allow user to select a length between 8-128.
//3. Allow user to decide if they want uppercase.
// confirm("Would you like uppercase characters ? ");
//4. Allow user to decide if they want numbers.
// confirm("Would you like lowerchase characters ?");
//5. Allow user to decide if they want special char.
// confirm("Would you like special characters ?");
//6. Generate the passowrd.
