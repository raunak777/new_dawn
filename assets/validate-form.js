let name = document.querySelector("[data-firstname]");
let lastname = document.querySelector("[data-lastname]");
let error = document.querySelector("[data-form-error]");
error.style.display = "none";
function nameValidate(name){
var pattern = /^[a-zA-Z\s]*$/;

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


['keyup','blur','focus'].forEach( function(evt) {
  ['name','lastname'].forEach(function(ele){
  ele.addEventListener(evt, function(){
  nameValidate(this.value.trim());
  }, false);
  });
});