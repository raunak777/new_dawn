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

if(pattern.test(name))
{
	error.style.display = "none";
}
else{
Object.assign(error, {
  innerText: "Name error!",
  style: "display: block; color: red"
  });
}


}


['keyup','blur','focus'].forEach( function(evt) {
  name.addEventListener(evt, function(){
  nameValidate(this.value.trim());
  }, false);
});