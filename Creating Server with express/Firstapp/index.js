const express = require('express');
const app = express();
// app.use(() => {
//     console.log("We Got A Req");
// })
app.listen(8080, () => {
    console.log("listening")
})

app.get('/r/:sub', (req, res) => {
    const { sub } = req.params;
    res.send(`<h1>Browsing the ${sub} sub`)
})
app.get('/r/:sub/:ID', (req, res) => {
    const { sub, ID } = req.params;
    res.send(`<h1>Viewing ID: ${ID} on the ${sub} sub`)
})
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED')
    }
    res.send(`<h1>Search Results For: ${q}</h1>`)
})

app.get('/', (req, res) => {
    res.send('This is Homepage!!!')
})
app.get('/cats', (req, res) => {
    res.send('MEOWWWWWWWW!!!!!!!!!')
})
app.get('/dogs', (req, res) => {
    res.send('WOOFFFFF!!!!!!!!')
})
app.get('*', (req, res) => {
    res.send(`I Dont Konw That Request`)
})