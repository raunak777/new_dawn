let name = document.querySelector("[data-firstname]");


function nameValidate(name){
var pattern = /^[a-zA-Z\s]*$/;
console.log(pattern.test(name));
if(name.length < )

}


name.addEventListener("keyup", function(){
nameValidate(this.value.trim());
})

['keyup','blur'].forEach( function(evt) {
  name.addEventListener(evt, function(){
  
  }, false);
});