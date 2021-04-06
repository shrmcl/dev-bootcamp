const readlineSync = require('readline-sync');

const spice =   ['spicy', 
                'very spicy', 
                'so spicy, you won\'t be able to feel your face'];
index = readlineSync.keyInSelect(spice, "How spicy would you like your tacos?");
console.log(`Ok, so you want your tacos to be ${spice[index]}. Are you sure about this?`);

const yesNo = ['yes', 'no'];
if (readlineSync.keyInYN('Do you want this module?')) {
    console.log('Ok, we will have your order right out.');
  } else {
    console.log('What\’s the matter? Can\'t handle the heat?');
  }