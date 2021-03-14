let field1 = document.querySelector("#email");
let field2 = document.querySelector("#pw");

document.querySelector("#submit").addEventListener("click", function() {

    field1.value && field2.value ? console.log('yay') : prompt("Please check the fields and make sure they are not blank.");
    
})