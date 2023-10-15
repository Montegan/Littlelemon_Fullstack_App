const express= require('express')
const cors= require('cors')
const bodyParser = require('body-parser')
const router= require('./routers/router')
const mongoose= require('mongoose')
require('dotenv/config');
const app= express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.use('/',router);

const dbOptions= {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.DB_URI,dbOptions)
.then(()=>console.log("data base connected alali"))
.catch(err=>console.log(err))

const port = process.env.PORT || 4000
const server = app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})