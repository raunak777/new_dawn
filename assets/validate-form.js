let name = document.querySelector("[data-firstname]");
let error = document.querySelector("[data-form-error]");

function nameValidate(name){
var pattern = /^[a-zA-Z\s]*$/;
console.log(pattern.test(name));
if(name.length < 3)
{
error.text("Name must be greater than 3 word");
}

}


['keyup','blur','focus'].forEach( function(evt) {
  name.addEventListener(evt, function(){
  nameValidate(this.value.trim());
  }, false);
});