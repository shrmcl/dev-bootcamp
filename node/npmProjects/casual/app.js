var casual = require('casual');
var name = casual.name;
var city = casual.city;
var phone = casual.phone;
var address = casual.address;
var month = casual.month;
var country = casual.country;
var message = `
Hello there ${name}! 
 How was your trip to ${country}? 
 Did you get to visit ${city}? 
 I sure do hope you had a wonderful time. 
 Is your phone number still ${phone}?
 I will try to give you a call sometime. By the way, I want to send you a fresh loaf of bread at your address of:
 
         ${address}. 
         
 Well, I will see you soon. I will be visiting sometime before ${month}. 
 Until then, farewell!
`
console.log(message)