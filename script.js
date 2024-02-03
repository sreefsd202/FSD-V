var em=document.getElementById("email");
var pwd=document.getElementById("password");
var num=document.getElementById("number");
var err1=document.getElementById("err1");
var err2=document.getElementById("err2");
var err3=document.getElementById("err3");

var regex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2,3})?$/
function validate(){
if(em.value.trim()==""){
err1.innerText="Field cannot be empty";
err1.style.color="red"
em.style.border="2px solid red";
return false
}
else if(!regex.test(em.value)){
err1.innerText="Please enter proper email";
err1.style.color="red"
em.style.border="2px solid red";
return false
}
else{
err1.innerText="";
em.style.border="2px solid green"
return true
}
}
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
me.onfocus = function() {
document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
me.onblur = function() {
document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
me.onkeyup = function() {
// Validate lowercase letters
var lowerCaseLetters = /[a-z]/g;
if(me.value.match(lowerCaseLetters)) {
letter.classList.remove("invalid");
letter.classList.add("valid");
} else {
letter.classList.remove("valid");
letter.classList.add("invalid");
}

// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(me.value.match(upperCaseLetters)) {
capital.classList.remove("invalid");
capital.classList.add("valid");
...
