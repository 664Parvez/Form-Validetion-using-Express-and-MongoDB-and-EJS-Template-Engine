const Createmodel = require('../models/register.model.js')

const getSignin = (req, res) => {
    res.render("signin")
}

const postSignin = async (req, res) => {
    try{

        const password = req.body.password
        const cpassword  = req.body.cpassword

        if ( password === cpassword ) {
            
            const registerEmployee = new Createmodel({

                firstname: req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                phone : req.body.phone,
                gender : req.body.gender,
                age : req.body.age,
                password : req.body.password,
                cpassword : req.body.cpassword

            })

            const dataSave = await registerEmployee.save()
            res.status(201).render('home')

        } else {
            res.send("Password are not same")
        }

    } catch(err) {
        res.status(400).send('Data is not sended' + err)
    }
}

module.exports = { getSignin, postSignin }