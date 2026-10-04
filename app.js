const express = require('express')
const app = express()

// Global utility middleware
app.use(express.json()) // For Post request.

// routing middleware to create path between the files and main app.js file
const userRoute = require("./User"); 
app.use(userRoute); // 
const paymentRoute = require("./Payment")
app.use(paymentRoute) 

const studentinfoRoute = require("./studentinfo")
app.use(studentinfoRoute) // 


const datamodelRoute = require("./datamodel")
app.use(datamodelRoute)






app.listen(3000, ()=>{
    console.log("Server is running on 3000...");
})