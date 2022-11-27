// Assignment Code
var generateBtn = document.querySelector("#generate");




var generatepassword = function () {

  var specialcharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];



  var passwordlength = prompt("How long would you like to make your password?");
  if (!passwordlength) {
    return;
  }

  passwordlength = parseInt(passwordlength)

  if (passwordlength < 8 || passwordlength > 128){
    alert("Password must be atleast 8 characters and less than 128 characters")
    return;
  }

  

  var usespecialcharacters = confirm("Do you want to include special characters?");

  var useuppercase = confirm("Do you want to include uppercase?");

  var uselowercase = confirm("Do you want to include lowercase?");

  var usenumbers = confirm("Do you want to include numbers?");

  var selectionArr = [];

  if (usespecialcharacters) {
    selectionArr = selectionArr.concat(specialcharacters);
  }

  if (useuppercase) {
    selectionArr = selectionArr.concat(uppercase);
  }

  if (uselowercase) {
    selectionArr = selectionArr.concat(lowercase);
  }

  if (usenumbers) {
    selectionArr = selectionArr.concat(numbers);
  }



  var endresult = ""

  for (var i = 0; i < passwordlength; i++) {
    endresult += selectionArr[Math.floor(Math.random()*selectionArr.length)]
  }
  return endresult
};


// Write password to the #password input
function writePassword() {
  var password = generatepassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  if(!password || password == undefined){
       passwordText.value = "OOOOOPS"
   return
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
