// Only Admins can create and see the student information. Students can only see their own information.
const express = require('express');

const router = express.Router();


router.post('/users/:id/studentinfo', (req, res) => {
    const { Name, Age, ID, Class, Section, Department } = req.body;

    if (!Name || !Age || !ID || !Class || !Section || !Department) {
        res.status(400).json({
            error: "All fields are required!"
        })
        console.log("User information is not given properly!")
        return;
    }
    else {
        const info = { Name, Age, ID, Class, Section, Department }
        res.status(201).json({
            message: "Student information created successfully!",
            student: info
        })
        console.log("Student information created successfully!")
    }
})

module.exports = router;