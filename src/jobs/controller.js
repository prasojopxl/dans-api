const express = require("express");
const router = express()
const { joblists } = require("../../models")
const postData = async (req, res, next) => {
    try {
        const body = req.body
        const addData = await joblists.create({
            type: body.type,
            url: body.url,
            company: body.company,
            company_url: body.company_url,
            location: body.location,
            title: body.title,
            description: body.description,
            how_to_apply: body.how_to_apply,
            company_logo: body.company_logo,
            status: 1,
        })
        return res.json({
            message: "Success add data"
        })
    } catch (error) {
        console.log(error)
    }
}

const getData = async (req, res, next) => {
    try {
        const addData = await joblists.findAll({
            limit: req.query.limit ? parseInt(req.query.limit) : null,
            offset: req.query.page ? parseInt(req.query.page) * parseInt(req.query.limit) - parseInt(req.query.limit) : null
        })
        return res.json({
            data: addData,
            limit: req.query.limit ? parseInt(req.query.limit) : null,
            offset: req.query.page ? parseInt(req.query.page) * parseInt(req.query.limit) - parseInt(req.query.limit) : null,
            page: req.query.page
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = { postData, getData }
