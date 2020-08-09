var myInput = document.getElementById("password2");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var cmp = document.getElementById("cmp");
var rpass = document.getElementById("rpassword");

myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
    rpass.onfocus = function() {
  document.getElementById("msg").style.display = "block";
}

 rpass.onblur = function() {
  document.getElementById("msg").style.display = "none";
}

rpass.onkeyup = function() {
  var paswd = document.getElementById("password2").value;
  if(paswd===rpass.value) {
    cmp.classList.remove("invalid");
    cmp.classList.add("valid");
  } else {
    cmp.classList.remove("valid");
    cmp.classList.add("invalid");
}
}