const express=require('express')

const app=express();


//routes

app.get('/',(req,res)=>{

    res.send("Hello Sandeep");
})

app.get('/add',(req,res)=>{
    res.send('we are adding user')
})

app.listen(4000,()=>{
    console.log('server is running on port 4000')
          
})