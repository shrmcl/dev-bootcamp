// NOTE: Original trial class code
const baseUrl = "http://localhost:3000"
// READ
$(document).ready(function(){
    let endpoint = `${baseUrl}/todos`;
    fetch(endpoint)
    .then(function(response){
        if(!response.ok){
            throw Error("No response")
        } else {
            return response.json();
        }
    })
    .then(function(dataArray){
        console.log(dataArray)
        $('ul').empty();
        dataArray.forEach(function(todo){
            $("ul").append(
                `<li data-id=${todo.id}>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
            );
        })
    })
    .catch(function(error){
        console.error("Issues READING the data.", error)
    })
})
// CREATE
$("input").keypress(function (event) {
    if (event.which === 13 && $(this).val()) {
        let newTodoItem = {
            description: $(this).val()
        };
        let endpoint = `${baseUrl}/todos`;
        fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(newTodoItem),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            if(!response.ok){
                throw Error("Issues!!!!")
            } else {
                return response.json();
            }
        })
        .then(function(newTodo){
            $("ul").append(
                `<li data-id=${newTodo.id}>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
                );
            $("input").val("");
        })
        .catch(function(error){
            console.error("Issues with CREATING data on backend")
        })
    }
});
// UPDATE
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});
// DELETE
$("ul").on("click", "span", function (event) {
    let thisId = $(this).parent().data('id'); 
    let endpoint = `${baseUrl}/todos/${thisId}`;
    fetch(endpoint,
        {   method: "DELETE"}
        )
    .then(function(response){
        if(!response.ok){
            throw Error("Cannnot delete");
        } else {
            return response.json();
        }
    })
    .then(function(data){
        console.log(data);
        $(this).parent().remove();
    })
    .catch(function(error){
        console.error("Issue with deleting from backend");
    })
});