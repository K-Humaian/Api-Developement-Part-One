// Data modeling and Data flow in a Backend Application

const express = require("express");
const router = express.Router();


class Student {
    constructor({Name, ID, Email, Phone, Semester, UseID}) {          // Class to create a student object, constructor is used to initialize the object properties
        this.Name = Name;
        this.ID = ID;
        this.Email = Email;
        this.Phone = Phone;
        this.Semester = Semester;
        this.UseID = UseID;
    }
}
router.post("/users/:id/datamodel", (req, res) => {
    const data = new Student(req.body);
    res.status(201).json({
        message: "Student data model created successfully!",
        student: data
    })
    console.log("Data Inserted to our data model successfully!")
})

module.exports = router;