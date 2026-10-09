// Data modeling and Data flow in a Backend Application

const express = require("express");
const router = express.Router();
const Joi = require('joi') // For data validation


class Student {
    constructor({ Name, ID, Email, Phone, Semester, UseID }) {          // Class to create a student object, constructor is used to initialize the object properties
        this.Name = Name;
        this.ID = ID;
        this.Email = Email;
        this.Phone = Phone;
        this.Semester = Semester;
        this.UseID = UseID;
    }
}

const userschema = Joi.object({
    Name: Joi.string().min(3).max(50).pattern(/^[a-zA-Z\s]+$/).required(),
    ID: Joi.string().min(7).max(10).required(),
    Email: Joi.string().max(50).email().required(),
    Phone: Joi.string().min(11).max(20).pattern(/^[0-9]+$/).required(),
    Semester: Joi.string().min(1).max(3).required(),
    UseID: Joi.string().min(1).max(10).required()
}).messages({
    // Name Errors
    'string.pattern.base': 'Name can only contain letters and spaces.',

    // Email Errors
    'string.email': 'Please provide a valid email address.',

    // Global fallback rules for all fields
    'any.required': '{#label} is required.',
    'string.empty': '{#label} cannot be empty.',
    'string.min': '{#label} must be at least {#limit} characters.',
    'string.max': '{#label} cannot exceed {#limit} characters.'
})


router.post("/users/:id/datamodel", (req, res) => {

    const { error } = userschema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message }); // Error er detail dekhaite na bolle
        // return res.status(400).json({ error: error.details }); // Error er shob detail dekhaite chaile
    }

    const data = new Student(req.body);
    res.status(201).json({
        message: "Student data model created successfully!",
        student: data
    })
    console.log("Data Inserted to our data model successfully!")
})

module.exports = router;