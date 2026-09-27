// Status code in API : How to use status code in API?
import express from 'express'

const app = express()
const homeInfo = {

    Address: "South Patenga Bijoy Nagar",
    City: 'Chattogram',
    Country: "Bangladesh"
}

app.get('/home/:id', (req, res) => {
    const homeid = req.params.id;
    if (homeid !== "c221134") {
        res.status(404).json({
            message: "HomeID is invalid or not found!!",
        })
    }
    else {
        res.status(200).json({
            message: "HomeID is found!",
            homedetails: homeInfo
        })
    }

})
app.listen(3000, () => {
    console.log('server is running');
})