const express=require('express')
const adminFulfill=require('./adminFulfill')
const studentFulfill=require('./studentFulfill')
require('dotenv').config()
const { response, json } = require('express')
const app=express()
app.use(express.json())
const port= process.env.PORT || 3000
app.post('/admin',(req,res)=>{
    // console.log(req.body)
    // console.log(req.body.queryResult.outputContexts)
    // console.log(req.body.queryResult.fulfillmentMessages)

    // console.log("request.body.queryResult.parameters", req.body.queryResult.parameters);
    // console.log("request.body.originalDetectIntentRequest.payload", req.body.originalDetectIntentRequest.payload);
    
    adminFulfill(req,res)
})
app.post('/student',(req,res)=>{
    // console.log(req.body)
    // console.log(req.body.queryResult.outputContexts)
    // console.log(req.body.queryResult.fulfillmentMessages)

    // console.log("request.body.queryResult.parameters", req.body.queryResult.parameters);
    // console.log("request.body.originalDetectIntentRequest.payload", req.body.originalDetectIntentRequest.payload);
    studentFulfill(req,res)
})
app.listen(port,()=>{
    console.log(`lintening at port ${port}`)
})





