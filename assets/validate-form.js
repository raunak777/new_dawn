let name = document.querySelector("[data-firstname]");
let lastname = document.querySelector("[data-lastname]");
let error = document.querySelector("[data-form-error]");
let email = document.querySelectorAll("input[type=email]");
if(error != null){
error.style.display = "none";
}
//name validation
function nameValidate(name){
let pattern = /^[a-zA-Z\s]*$/;
if(name.length < 3)
{
Object.assign(error, {
  innerText: "Name must be greater 3 char",
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
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


if(email != null){
['keyup','blur','focus'].forEach( function(evt) {
  email.forEach(function(em){
  em.addEventListener(evt, function(){
  console.log(this.value);
  }, false);
  })
});
}


if(name != null){
['keyup','blur','focus'].forEach( function(evt) {
  name.addEventListener(evt, function(){
  nameValidate(this.value.trim());
  }, false);
});
}
if(name != null){
['keyup','blur','focus'].forEach( function(evt) {
  lastname.addEventListener(evt, function(){
  nameValidate(this.value.trim());
  }, false);
});
}