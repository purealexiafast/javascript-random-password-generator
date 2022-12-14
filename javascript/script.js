//Prompt when user clicks the button.

/*document.getElementById('generate').addEventListener('click', generateOptions); */



function generateOptions(){
let length = (prompt("Enter how many characters you would like your password to be. Choose between 8 and 128 characters."));

//Loop if user selects incorrect number.
  while(length < 8 || length > 128){
  length = (prompt("Password length must be between 8 and 128 characters, please try again."));
  }

  //Confirm which type of characters to use in password.
  let upperCase = confirm("Would you like to include uppercase letters in your password?");
  let lowerCase = confirm("Would you like to include lowercase letters in your password?");
  let number = confirm("Would you like to include numbers in your password?");
  let special = confirm("Would you like to include special characters in your password?");

  //Loop if user doesn't select any character types.
  while ((!upperCase && !lowerCase && !number && !special)){
    alert("Please select at least one character type.");
    upperCase = confirm("Would you like to include uppercase letters in your password?");
    lowerCase = confirm("Would you like to include lowercase letters in your password?");
    number = confirm("Would you like to include numbers in your password?");
    special = confirm("Would you like to include special characters in your password?");
}

//Return values that the user selected.

let options ={
  length,
  upperCase,
  lowerCase,
  number,
  special}

 return options  
}

const characters = {
   upper : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
   lower : "abcdefghijklmnopqrstuvwxyz",
   numbers : "0123456789",
   symbols :"!@#$%^&*><+_-="
 }

 function generatePassword() {
let options = generateOptions();
  console.log(options);
  let possibleCharacters = "";

  if (options.upperCase) {
    possibleCharacters += characters.upper;
  }
  if (options.lowerCase) {
    possibleCharacters += characters.lower;
  }
  if (options.number) {
    possibleCharacters += characters.numbers;
  }
  if (options.special) {
    possibleCharacters += characters.symbols;
  }

  possibleCharacters = possibleCharacters.split("");

  let password = "";
  for (let i = 0; i < parseInt(options.length); i++) {
    let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    let randomCharacter = possibleCharacters[randomIndex];
    password += randomCharacter;
  }
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





  
