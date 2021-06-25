const express=require('express')
const app=express()
const morgan=require('morgan')
const AppError=require('./AppError')

app.use(morgan('tiny'))
app.use((req, res, next) =>
{
    // console.log(req.requestTime);
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
    res.status(401);
    throw new AppError('Password Rquired',401)
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
app.get('/error',(req,res)=>{
    chicken.fly()
})
app.get('/admin',(req,res)=>{
    throw new AppError ('You R Nt An Admin',403)
})

app.use((req,res,next)=>{
    res.status(404).send('NOT FOUND')
})

app.use((err,req,res,next)=>{
    const {status=500,message='Somthing Went Wrong'}=err;
    res.status(status).send(message)
})

app.listen(3000,()=>{
    console.log('App is on board')
})