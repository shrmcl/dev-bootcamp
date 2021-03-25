// prevent default refresh on button click

document.getElementById("save").addEventListener("click", function(event){
    // document.querySelector("#tester").textContent = "no refresh";
    event.preventDefault();

    // store input results in child nodes of #result div
    // check console for # of nodes, some are hidden
    let a = document.getElementById("result").childNodes;
    a[1].textContent = document.querySelector("#title").value;
    a[3].textContent = document.querySelector("#servings").value;
    a[5].textContent = document.querySelector(".ingredient").value;
});