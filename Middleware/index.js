const express=require('express')
const app=express()
const morgan=require('morgan')

app.use(morgan('tiny'))
app.use((req,res,next)=>{
    req.requestTime=Date.now();
    console.log(req.method,req.path)
    next();
})
app.use('/dogs',(req,res,next)=>{
    console.log('I love Dogs')
    next();
})
const verify=(req,res,next)=>{
    const {password}=req.query;
    if(password==='abrakadabra')
    next();
    else
    res.send('You Need Secret Password')
}


app.get('/',(req,res)=>{
    console.log(`Request time ${req.requestTime}`)
    res.send('Home Page!')
})
app.get('/dogs',(req,res)=>{
    console.log(`Request time ${req.requestTime}`)
    res.send('Woof oofs!')
})
app.get('/secret',verify,(req,res)=>{
    console.log(`Request time ${req.requestTime}`)
    res.send('Wow You Found the secret page!!!')
})

app.use((req,res,next)=>{
    res.status(404).send('NOT FOUND')
})
app.listen(3000,()=>{
    console.log('App is on board')
})