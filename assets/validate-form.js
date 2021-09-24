let name = document.querySelector("[data-firstname]");


function nameValidate(name){
var pattern = /^[a-zA-Z\s]*$/;
console.log(pattern.test(name));
if(name.length < 3)
{
console.log("Must be greater 3 digit");
}

}


['keyup','blur','focus'].forEach( function(evt) {
  name.addEventListener(evt, function(){
  nameValidate(this.value.trim());
  }, false);
});