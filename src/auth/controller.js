const { users } = require("../../models")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');


// post Data
const postData = async (req, res, next) => {
    const { body } = req
    const isEmailUsed = await users.findOne({
        where: {
            email: body.email
        }
    })
    if (isEmailUsed) {
        return res.status(400).json({
            message: "email already use"
        })
    }
    try {
        const password = bcrypt.hashSync(body.password, 10)
        const addData = await users.create({
            email: body.email,
            password: password,
            name: body.name,
            status: false,
            role: "admin"
        })
        return res.json(addData)
    } catch (error) {
        console.log(error)
    }
}


// Delete
const deleteData = async (req, res, next) => {
    const { id } = req.params
    const checkData = await users.findOne({
        where: {
            id: id
        }
    })
    try {
        if (!checkData) {
            res.status(400).json({
                message: "data not found"
            })
        }
        else {
            await checkData.destroy()
            res.status(201).json({
                message: `Success delete data ${id}`
            })
        }
    } catch (error) {
        console.log(error)
    }
}

//Login
const loginData = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const body = req.body;
        const user = await users.findOne({
            where: {
                email: body.email
            }
        })
        if (!user) {
            return res.status(400).json({
                message: "Email not found"
            })
        }
        const isPasswordCorrect = bcrypt.compareSync(body.password, user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "password incorrect"
            })
        }


        const data = {
            id: user.id,
            email: user.email,
            password: user.password
        }
        const token = jwt.sign(data, "screet")
        return res.json({
            token
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = { postData, deleteData, loginData }
