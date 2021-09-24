let name = document.querySelector("[data-firstname]");


function nameValidate(name){
var name_pat = /^[a-zA-Z\s]*$/;
        console.log("check", name_pat.test(name));

}


name.addEventListener("keyup", function(){
nameValidate(this.value);
})