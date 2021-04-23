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
                `<li>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
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
        var newTodoItem = {
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
                throw Error("issues!")
            } else {
                return response.json();
            }
        })
        .then(function(newTodo){
            $("ul").append(
                 `<li>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
                );
            $("input").val("");
        })
        .catch(function(error){
            console.error("Issues with CREATING data on backend")
        })
    }
})

// NOTE: Original trial class code

// $("input").keypress(function (event) {
//     if (event.which === 13 && $(this).val() !== "") {
//     var todoItem = $(this).val();
//     $("ul").append(
//         `<li>${todoItem}<span><i class='far fa-trash-alt'></i></span></li>`
//         );
//     $("input").val("");
//     }
// });

// $("ul").on("click", "li", function () {
//     $(this).toggleClass("completed");
// });

// $("ul").on("click", "span", function (event) {
//     $(this).parent().remove();
// });


