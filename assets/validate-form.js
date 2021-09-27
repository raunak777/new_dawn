let name = document.querySelector("[data-firstname]");
let error = document.querySelector("[data-form-error]");
let email = document.querySelector("[data-email]");
let pass = document.querySelector("[data-password]");
let button = document.querySelector("[data-submit]");
let disable = false;

if(error != null){
error.style.display = "none";
}
buttonDisable(disable);
function buttonDisable(bool){
  if(!bool){
    button.setAttribute("disabled",true);;
  }
  else{
    button.removeAttribute("disabled");
  }
}
//name validation
function nameValidate(name){
let pattern = /^[a-zA-Z\s]*$/;
if(name.length < 3)
{
Object.assign(error, {
  innerText: "Name must be greater 3 character",
  style: "display: block; color: red"
  });
  
}
else if(pattern.test(name))
{
	error.style.display = "none";
}
else{
Object.assign(error, {
  innerText: "Name contains any special characters or numbers!",
  style: "display: block; color: red"
  });
}
}
// email validation
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
  if(re.test(email) == false)
  {
  Object.assign(error, {
  innerText: "Email not valid!",
  style: "display: block; color: red"
  });
  }
  else if(email.startsWith('test')) {
  Object.assign(error, {
  innerText: "Email conatins test word!",
  style: "display: block; color: red"
  });
  }
  else{
  error.style.display = "none";
  }
}

//password
function checkPassword(pass) 
{ 
var reg =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(pass.match(reg)) 
{ 
error.style.display = "none";
}
else
{ 
Object.assign(error, {
  innerText: `Password between 8 to 15 characters 
which contain at least one lowercase letter, 
one uppercase letter, 
one numeric digit, 
and one special character`,
  style: "display: block; color: red"
  });
}
} 


if(pass != null)
{
  ['keyup','blur','focus'].forEach( function(evt) {
  pass.addEventListener(evt, function(){
  checkPassword(this.value.trim());
  }, false);
});
}


if(email != null){
['keyup','blur','focus'].forEach( function(evt) {
  email.addEventListener(evt, function(){
  validateEmail(this.value.toLowerCase().trim());
  }, false);
  
});
}


if(name != null){
['keyup','blur','focus'].forEach( function(evt) {
  name.addEventListener(evt, function(){
  nameValidate(this.value.trim());
  }, false);
});
}
