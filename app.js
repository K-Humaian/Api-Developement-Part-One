const express = require('express')
const app = express()



const userRoute = require("./User");
app.use(userRoute);

const paymentRoute = require("./Payment")
app.use(paymentRoute)

app.listen(3000, ()=>{
    console.log("Server is running on 3000...");
})