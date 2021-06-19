const express = require('express')
const app = express()
const fetch = require('node-fetch')
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    let types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
    res.render('home.ejs', { type: types })
})

app.get('/getActivity', (req, res) => {
    const { type, price, participants } = req.params

    const urlStr = `http://www.boredapi.com/api/activity?type=${type}&minprice=0&maxprice=${price}&participants=${participants}`

    fetch(urlStr)
        .then(res => res.json())
        .then(data => {
            if(data.error) res.render('error.ejs', { error: data.error })

            else res.render('result.ejs', { data })
        })
        .catch(err => {
            console.log('There was an error: ', err)
        })
})

app.listen(port, () => {
    console.log('App listening on port 3000')
})