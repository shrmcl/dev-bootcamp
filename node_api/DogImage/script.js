let image = document.getElementById('pic');                
image.setAttribute('src', "https://images.dog.ceo/breeds/kelpie/n02105412_3416.jpg")

let endpoint = "https://dog.ceo/api/breeds/image/random"

let button = document.getElementById('btn')

button.addEventListener('click', ()=> {
    fetch(endpoint)
    .then(response => {  // originally a string???
        if(response.ok) {
            return response.json() // change to object???
        }
        throw Error('this is the error message.')
    })
    .then(data => image.setAttribute('src', data.message)) // the above object
    .catch(err => console.log(err))
})


// basic fetch skeleton:
// fetch(endpoint)
// .then()
// .then()
// .catch()

