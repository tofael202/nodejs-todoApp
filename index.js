const express=require('express');
const app=express()
const mongoose=require('mongoose')
const morgan=require('morgan')
const dotenv=require('dotenv')
const mainRouter=require('./routes/mainRouter')
dotenv.config();
app.use( express.urlencoded({extended : true }));
app.use( express.json() );

app.set('view engine','ejs')

app.use('/',mainRouter);

//database Connection
mongoose.connect(process.env.Database_URL).then(()=>{
    console.log('Database Connected Successfully')
}).catch((err)=>{
    console.log(err)
})
app.listen(process.env.PORT,()=>{
    console.log(`Server running at ${process.env.PORT}`)
})