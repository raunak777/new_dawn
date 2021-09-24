let name = document.querySelector("[data-firstname]");


function nameValidate(name){
console.log(name);

}


name.addEventListener("keyup", nameValidate.bind(this.value));