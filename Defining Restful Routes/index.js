const path = require('path');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid'); //For generating ID's
const express = require('express');
const app = express();


app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.post('/comments', (req, res) =>
{
    const { username, comment } = req.body;
    comments.push({ id: uuid(), username, comment })
    res.redirect("/comments")
})
app.get('/comments/new', (req, res) => {
    res.render("comments/new")
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment });
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);
    const newCommentText = req.body.comment;
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})


app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === (id))
    res.render("comments/show", { comment })
})


app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})


app.get('/comments', (req, res) => {
    res.render("comments/index", { comments })
})
app.get('/tacos', (req, res) => {
    res.send("Get /tacos response")
})
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Ok these R Yr ${qty} ${meat}`)
})
app.listen(3000, () => {
    console.log("ON PORT 3000!!!")
})