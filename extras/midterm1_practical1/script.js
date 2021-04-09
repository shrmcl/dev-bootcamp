const lbs = document.querySelector('#lbs');
const kgs = document.querySelector('#kgs');
// have conversion event calculate on every keyup event
lbs.addEventListener('keyup', ()=> {
    // check if entry is numerical
    // convert lbs to kgs with up to 2 decimal points
    kgs.value = (parseFloat(lbs.value)) ? parseFloat(lbs.value / 2.205).toFixed(2) : 'no'
})
5