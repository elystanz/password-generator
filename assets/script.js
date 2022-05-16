// Assignment code here
// set globals to acquire id from html
var newPassword = document.getElementById("password");
var passwordLength = document.getElementById("length");
var uppercaseElem = document.getElementById("uppercase");
var lowercaseElem = document.getElementById("lowercase");
var numbersElem = document.getElementById("numbers");
var symbolsElem = document.getElementById("symbols");

var generateBtn = document.getElementById("generatePass");

// use object to assign functions to characters, allow randomization of password upon generation
var randomChar = {
  lower: getLower,
  upper: getUpper,
  number: getNumber,
  symbol: getSymbol
};

// enable checking of boxes to customize password
// if checked is not added to the element the function will not proceed -- bug?
generateBtn.addEventListener("click", function() {
  var length =  passwordLength.value;
  var hasUpper = uppercaseElem.checked;
  var hasLower = lowercaseElem.checked;
  var hasNumber = numbersElem.checked;
  var hasSymbol = symbolsElem.checked;

// will insert the generated password into the textarea with selected parameters
  newPassword.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

// generating function, using the randomChar object to assess selected parameters
function generatePassword(upper, lower, number, symbol, length) {
  var generatedPassword = "";
  var typesCount = lower + upper + number + symbol;
  // filtering through the object array to check what has been selected
  var typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]);

  if(typesCount === 0) {
    return "";
  };
 
  // iterate through the typesCount variable and address the password length before generating password
  for(var i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var checkTypes = Object.keys(type)[0];

      generatedPassword += randomChar[checkTypes]();
    });
  };

  // create password, slice the length of the password to match the length input on the generator
  var finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
};

// generator functions to randomize characters

function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +  97);
};
  // console.log(getLower());

function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
  // console.log(getUpper());

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
  // console.log(getNumber());

function getSymbol() {
  var symbolsElem = "!@#$%^&*"
  return symbolsElem[Math.floor(Math.random() * symbolsElem.length)];
};
  // console.log(getSymbol());

var generateBtn = document.querySelector("#generatePass");

// print generated password function to the textarea
function createPassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  document.getElementById("password").innerHTML = password;

};

// generate button
function haveYourPassword() {
  generateBtn.addEventListener("click", function() {
    createPassword();
    document.querySelector("#password").innerHTML = password;
  });
};