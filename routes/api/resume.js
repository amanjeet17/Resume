const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// Load Loan Model
const Resume = require('../../models/Resume');

// @route   GET api/loans/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

// @route   POST api/loan/raised
// @desc    Create users loan
// @access  Private
router.post('/submit',(req,res)=>{
    console.log("raised data",req.body);
    const dataFields ={};
    dataFields.name = req.body.name;
    dataFields.email = req.body.email;
    dataFields.message = req.body.message;
    dataFields.subject = req.body.subject;
    Resume.findOne({email: req.body.email})
    .then(resume =>{
      if(resume){
        const eror ={}
        eror.name = "resume can be taken once"
        // update
        console.log("EROR",eror);
        res.json(eror)
      }
      else{
        // create
        console.log("resume",dataFields);
        new Resume(dataFields).save().
        then(loan =>{
          console.log("Saved loanFields",dataFields)
          res.json(resume)});
      }
    })
    .catch(err => {
      console.log("error in raisedBYYYYY");
       return res.status(404).error
     })
});

module.exports = router;
