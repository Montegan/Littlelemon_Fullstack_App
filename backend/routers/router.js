const express= require('express')
const router= express.Router()


router.post('/registered', (req,res)=>{
console.log(req.body)
res.send("message recieved")
})
router.get('/users', (req,res)=>{
         const userData= [
            { 
                "hello":"world",
                "welcome":1
            }
         ]

         res.send(userData)
})

module.exports= router