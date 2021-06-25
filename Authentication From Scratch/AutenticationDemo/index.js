const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User=require('./models/user')
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/loginDemo', { useNewUrlParser: true,useUnifiedTopology: true})
    .then(() =>
    {
        console.log('Mogo Connected');
    })
    .catch(err =>
    {
        console.log('ERROR!')
        console.log(err);
})

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'notagoodsecret',resave: true,
    saveUninitialized: true }));

const requirelogin = (req, res, next) =>
{
    if (!req.session.user_id)
        return res.redirect('/login');
    next();
}

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) =>
{
    res.send('This Is Homepage');
})
app.get('/secret',requirelogin, (req, res) =>
{
    return res.render('secret');
})
app.get('/topsecret',requirelogin, (req, res) =>
{
    return res.send('This Is Topsecret!!!');
})
app.get('/register', (req, res) =>
{
    res.render('register');
})
app.get('/login', (req, res) =>
{
    res.render('login');
})
app.post('/register',async (req, res) =>
{
    const { username, password } = req.body;
    const user = new User({username,password})
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    }
    else {
        res.redirect('/login')
    }
})
app.post('/secret',async (req, res) =>
{
    req.session.destroy();
    res.redirect('/login');
})

app.listen(3000, () =>
{
    console.log('Connected');
})