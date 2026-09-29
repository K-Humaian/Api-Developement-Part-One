const express = require('express')
const app = express()

app.use(express.json()) // For Post request.


const userRoute = require("./User"); 
app.use(userRoute); // For Get request
const paymentRoute = require("./Payment")
app.use(paymentRoute) // For Get request



app.listen(3000, ()=>{
    console.log("Server is running on 3000...");
})