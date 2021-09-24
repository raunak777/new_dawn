let name = document.querySelector("[data-firstname]");
let error = document.querySelector("[data-form-error]");
error.style.display = "none";
function nameValidate(name){
var pattern = /^[a-zA-Z\s]*$/;
console.log(pattern.test(name));
if(name.length < 3)
{
Object.assign(error, {
  innerText: "Hello",
  style: "display: block; color: red"
  })
}

}


['keyup','blur','focus'].forEach( function(evt) {
  name.addEventListener(evt, function(){
  nameValidate(this.value.trim());
  }, false);
});