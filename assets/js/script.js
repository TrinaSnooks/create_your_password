  
  //ask for password length from user

  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var number = ["1","2","3","4","5","6","7","8","9","0"];
  var special = ["!","@","#","$","%","^","&","*","'"];

  function generatePassword() {

  var userSelection = ""; 
  var finalPassword = "";

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
    var randomIndex = Math.floor(Math.random() * .length);
    var random = userSelection[randomIndex]; 
    finalPassword = finalPassword.concat(random)
    }
  }
  //console.log(userSelection);
console.log(finalPassword);
//console.log(random);


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

//passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}