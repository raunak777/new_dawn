let name = document.querySelector("[data-firstname]");
let error = document.querySelector("[data-form-error]");
error.style.display = "none";
function nameValidate(name){
var pattern = /^[a-zA-Z\s]*$/;

if(name.length < 3 && pattern.test(name) == true)
{
Object.assign(error, {
  innerText: "Name must be greater 3 char & don't use number or special key",
  style: "display: block; color: red"
  });
}
else{
error.style.display = "none";
}

}


['keyup','blur','focus'].forEach( function(evt) {
  name.addEventListener(evt, function(){
  nameValidate(this.value.trim());
  }, false);
});