const express = require('express')
const app = express();
const path = require('path');
const redditdata = require('./data.json')





app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { number: num })
})
app.get('/cat', (req, res) => {
    const cats = ['blue', 'rocket', 'monty', 'winston']
    res.render('cats', { cats })
})
app.get('/r/:sub', (req, res) => {
    // console.log(req)
    const { sub } = req.params;
    const data = redditdata[sub];
    if (data) {
        res.render('subq', { ...data })
    }
    else {
        res.render('notfound', { sub })
    }
})

app.listen(3000, () => {
    console.log('Listening On Port 3000')
})