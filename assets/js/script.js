  
//criteria - 8 -128 characters -- number  ---DONE
// prompt for number. alert if under 8, above 128  ---DONE
//upper, lower, number, spec   -- boolean  --DONE
// confirm - ok/cancel  -- DONE
//return password in box
//use a LOOP  - add a random character out of chosen criteria for final password
// loop will run the number of times the user selected for length -- 
// strings act like an array??
// use Math.Random ()  - randomize password

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var special = "!@#$%^&*()";

  // function to ask user for criteria - length and character types
  function generatePassword() {

  var userSelection = ""; 
  var finalPassword = "";

  //ask for password length from user
  var passwordLength = 
      prompt("How many characters should your password be?", "Select 8 to 128 characters");
        if (passwordLength <8 || passwordLength > 128) 
        alert("Invalid password length. Please select again");         
        

  //ask user for Character types.  All boolean questions
  // declaration of character variables 

  var isUppercase = 
      confirm("Uppercase?");

  var isLowercase = 
      confirm("Lowercase?");

  var isNumber = 
      confirm("Numbers?");

  var isSpecial = 
      confirm("Special Characters?");

  console.log(passwordLength);
  console.log(isUppercase);
  console.log(isLowercase);
  console.log(isNumber);
  console.log(isSpecial);

 
  if (isUppercase) {
    finalPassword += uppercase;
    //userSelection = userSelection.concat(uppercase);
 
    } 
   
   if (isLowercase) {
    finalPassword += lowercase;
    //userSelection = userSelection.concat(lowercase);
   
   }

   if (isNumber) {
    finalPassword += number;
    //userSelection = userSelection.concat(number);
   
   }

   if (isSpecial) {
    finalPassword += special;
    //userSelection = userSelection.concat(special);
    
   }
    

  for (var i = 0; i < passwordLength ; i++) {
    var randomIndex = Math.floor(Math.random() * passwordLength.length);
    var random = userSelection[randomIndex]; 
    finalPassword = finalPassword.concat(random)
    console.log(finalPassword);
    }
  //}
  //console.log(userSelection);

//console.log(finalPassword);
//console.log(random);


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// writePassword Function

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
