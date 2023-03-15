const { users } = require("../../models")

// post Data
const postData = async (req, res, next) => {
    try {
        const body = req.body
        const addData = await users.create({
            email: body.email,
            password: body.password,
            name: body.name,
            status: false,
            role: "admin"
        })
        return res.json(addData)
    } catch (error) {
        console.log(error)
    }
}

// get All data
const getData = async (req, res, next) => {
    const getData = await users.findAll()
    try {
        res.status(200).json(
            getData
        );
    } catch (error) {
        console.log(error)
    }
}

// get By ID
const getDataID = async (req, res, next) => {
    try {
        const { id } = req.params
        const userId = await users.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: ["password"]
            }
        })
        res.status(200).json({
            data: userId
        })
    } catch (error) {
        console.log(error)
    }
}

// PUT
const putData = async (req, res, next) => {
    const body = req.body;
    const { id } = req.params
    const data = await users.findByPk(id)
    try {
        if (!data) return res.status(404).json({
            message: "data not found"
        })
        await data.update(body)
        return res.status(200).json({
            message: `data ${id} sudah diupdate`
        })
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

module.exports = { getData, postData, getDataID, putData, deleteData }
