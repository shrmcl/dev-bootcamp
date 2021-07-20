// function dog(){
//     var dogName = "hootchie"
//     return function announcement(){
//         console.log('My dog name is ', dogName)
//     }
// }

// var dogNameAnnouncement = dog()

// dogNameAnnouncement();

var person = {
    name: 'Shelby',
    age: 28,
    address: {
        street: '1234 My Street',
        city: 'Austin'
    }
}

// var person2 = {...person}                     //shallow copy
var person3 = JSON.parse(JSON.stringify(person)) //deep copy

person3.address.city = 'Waco'


// person3.age = 30

console.log('person is ', person)
console.log('person3 is ', person3)
