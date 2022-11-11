//criteria - 8 -128 characters -- number  ---DONE
// prompt for number. alert if under 8, above 128  ---DONE
//upper, lower, number, spec   -- boolean  --DONE
// confirm - ok/cancel  -- DONE
//return password in box
//use a LOOP  - add a random character out of chosen criteria for final password
// loop will run the number of times the user selected for length -- 
// strings act like an array??
// use Math.Random ()  - randomize password

/*
function generatePassword() {
    /* var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var number = "1234567890";
    var special = "!@#$%^&*";

    var finalPassword = "";
    */

    var passwordLength = 
        prompt("How many characters should your password be?", "Select 8 to 128 characters");
          if (passwordLength <8 || passwordLength > 128) 
          alert("Invalid password length. Please select again");         
          

    // show password length in console
    console.log(passwordLength);
//}


/*
    //ask user for Character types.  All boolean questions
    // declaration of character variables 
    var isUppercase = confirm("Uppercase?"); 
    var isLowercase = confirm("Lowercase?");
    var isNumber = confirm("Numbers?");
    var isSpecial = confirm("Special Characters?");

    //print results to console from character questions to user
    console.log(isUppercase);
    console.log(isLowercase);
    console.log(isNumber);
    console.log(isSpecial);

    //creating password
    // add 1 character to finalPassword with +=

         if (isUppercase) {
          finalPassword += uppercase;
         
            //userSelection.push(upperCase);
          //} 
          
         }

         if (isLowercase) {
          finalPassword += lowercase;
         }

         if (isNumber) {
          finalPassword += number;
         }

         if (isSpecial) {
          finalPassword += special;
         }

         

//loop    look at      https://www.programiz.com/javascript/examples/generate-random-strings

*/
//}
/*
generatePassword ();


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/
