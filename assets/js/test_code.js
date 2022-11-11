// Prompt for response
var line = 
   prompt("how are you")
   console.log(line);

//added condition. Return message
if (line === "a") {
    alert("Invalid password length. Please select again");
    console.log("not valid");        
    }

// boolean questions. display boolean to console

var isUppercase = confirm("Uppercase?"); 
console.log(isUppercase);


    //creating password
    // add 1 character to finalPassword with +=
/*
         if (isUppercase) {
          finalPassword += uppercase;
         
            //userSelection.push(upperCase);
          } 



//-------------------------------------------------------------




/*

function generatePassword() {
    /*var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var number = "1234567890";
    var special = "!@#$%^&*";

    var finalPassword = "";
    

    var passwordLength = 
        prompt("How many characters should your password be?", "Select 8 to 128 characters");
          if (passwordLength <8 || passwordLength > 128) {
          alert("Invalid password length. Please select again");
          return;          
          }

    // show password length in console
    console.log(passwordLength);
    */
        