let name = document.querySelector("[data-firstname]");


function nameValidate(name){
var pattern = /^[a-zA-Z\s]*$/;
console.log(pattern.test(name));

}


name.addEventListener("keyup", function(){
nameValidate(this.value);
})