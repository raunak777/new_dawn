let name = document.querySelector("[data-firstname]");
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
else{
if(pattern.test(name))
{
	console.log("True");
}
else{
console.log("False");
}
}

}


['keyup','blur','focus'].forEach( function(evt) {
  name.addEventListener(evt, function(){
  nameValidate(this.value.trim());
  }, false);
});