// NOTE: Original trial class code

const baseUrl = "http://localhost:3000";

// READ
// use document.ready() to trigger the fetch() 
$(document).ready(function(){
    let endpoint = `${baseUrl}/todos`;
    fetch(endpoint)
    .then(function(response){
        if(!response.ok){
            throw Error("no response")
        } else {
            return response.json()
        }
    })
    .then(function(dataArray){
        // see what the server sends as data
        console.log(dataArray)
        // empty the fake data from our list before adding the server's data to list
        $('ul').empty();
        // iterate through returned array and add todo's descriptions to our HTML list for each item
        dataArray.forEach(function(todo){
            // determine if the task should be displayed with "completed" class css or not
            let completed = todo.isComplete ? "completed" : "";
            $("ul").append(
                // add data attribute (data-id) to hold id assigned from backend so we can refer to this todo on frontend
                `<li data-id=${todo.id} class=${completed}>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
                );
        })
    })
    .catch(function(error){
        console.error("error READING the data.", error)
    })
})

// CREATE
$("input").keypress(function (event) {
    // 'event' is an object containing a key called 'which' to hold ASCII value of key pressed. '13' = Enter key.
    // 'this' refers to whatever the current function belong to. i.e. "input" in this case.
    // so, if key pressed is 'enter' AND the value of input is true (not empty)
    if (event.which === 13 && $(this).val()) {
        let newTodoItem = {
            description: $(this).val()
        };
        let endpoint = `${baseUrl}/todos`;
        // send data (todoItem) via post() through request body
        // otherwise fetch() does a get() method by default.
        fetch(endpoint, {
            method: "POST",
            // convert the todoItem to JSON
            body: JSON.stringify(newTodoItem),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            if(!response.ok){
                throw Error("Issues!!!")
            } else {
                return response.json();
            }
        })
        .then(function(newTodo){
            // take our new task item (the input value) and add it to our 'ul' in HTML
            $("ul").append(
                // add data attribute (data-id) to hold id assigned from backend so we can refer to this todo on frontend
                `<li data-id=${newTodo.id}>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
                );
            // empty the input field (NO SPACES)
            $("input").val("");
        })
        .catch(function(error){
            console.error("issues with CREATING data on backend")
        })
    }
});

// UPDATE
// when 'li' is clicked, toggle it's "completed" class on or off
$("ul").on("click", "li", function () {
    let thisId = $(this).data('id');
    let endpoint = `${baseUrl}/todos/${thisId}`
    let self = this;
    fetch(endpoint, {
        method: "PUT"
    })
    .then(function(response){
        if(!response.ok){
            throw Error("cannot update");
        } else {
            return response.json()
;        }
    })
    .then(function(data){
       $(self).toggleClass("completed");
    })
    .catch(function(error){
        console.error('error updating data from backend');
    })
});

// DELETE
// when 'span' is clicked (trashcan icon), remove its parent (the 'li')
$("ul").on("click", "span", function (event) {
    event.stopPropagation();
    // grab the id from the parent of the span's (li) data attribute we added above
    let thisId = $(this).parent().data('id');
    let endpoint =`${baseUrl}/todos/:id`
    // figure out what 'this' is here
    console.log('This outside:', this);
    // assign 'this' to new variable to use below
    let self = this;

    fetch(endpoint, {
        method: "DELETE"
    })
    .then(function(response){
        if(!response.ok){
            throw Error("Cannot delete");
        } else {
            return response.json();
        }
    })
    .then(function(data){
        console.log('this inside:', self)
        // remove parent of span (the li)
        // 'self' variable created above to refer to 'this' of span
        $(self).parent().remove();
    })
    .catch(function(error){
        console.error("issue with deleting from backend")
    })
    
});
