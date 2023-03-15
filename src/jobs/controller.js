const express = require("express");
const router = express()
const { joblists } = require("../../models")
const { Op } = require("sequelize");

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

// get all data
const getData = async (req, res, next) => {
    try {
        const addData = await joblists.findAll({
            limit: req.query.limit ? parseInt(req.query.limit) : null,
            offset: req.query.page ? parseInt(req.query.page) * parseInt(req.query.limit) - parseInt(req.query.limit) : null
        })
        return res.status(200).json({
            data: addData,
            limit: req.query.limit ? parseInt(req.query.limit) : null,
            offset: req.query.page ? parseInt(req.query.page) * parseInt(req.query.limit) - parseInt(req.query.limit) : null,
            page: req.query.page
        })
    } catch (error) {
        console.log(error)
    }
}

// Filter data
const filterData = async (req, res, next) => {
    try {

        const addData = await joblists.findAll({
            where: req.query.type && req.query.location && req.query.title ? {
                [Op.and]: [
                    { type: req.query.type },
                    { location: req.query.location },
                    {
                        title: {
                            [Op.like]: `${req.query.title}%`
                        }
                    }
                ]
            } : req.query.type && req.query.location ? {
                [Op.and]: [
                    { type: req.query.type },
                    { location: req.query.location },
                ]
            } : req.query.type && req.query.title ? {
                [Op.and]: [
                    { type: req.query.type },
                    {
                        title: {
                            [Op.like]: `${req.query.title}%`
                        }
                    }
                ]
            } : req.query.location && req.query.title ? {
                [Op.and]: [
                    { location: req.query.location },
                    {
                        title: {
                            [Op.like]: `${req.query.title}%`
                        }
                    }
                ]
            } : req.query.type ? {
                [Op.and]: [
                    { type: req.query.type },
                ]
            } : req.query.location ? {
                [Op.and]: [
                    { location: req.query.location },
                ]
            } : req.query.title ? {
                [Op.and]: [
                    {
                        title: {
                            [Op.like]: `${req.query.title}%`
                        }
                    }
                ]
            } : null,
            limit: req.query.limit ? parseInt(req.query.limit) : null,
            offset: req.query.page ? parseInt(req.query.page) * parseInt(req.query.limit) - parseInt(req.query.limit) : null
        })
        return res.status(200).json({
            data: addData,
            limit: req.query.limit ? parseInt(req.query.limit) : null,
            offset: req.query.page ? parseInt(req.query.page) * parseInt(req.query.limit) - parseInt(req.query.limit) : null,
            page: req.query.page
        })
    } catch (error) {
        console.log(error)
    }
}

// get By ID
const getDataID = async (req, res, next) => {
    try {
        const { id } = req.params
        const jobId = await joblists.findOne({
            where: {
                id: id
            },
        })
        res.status(200).json({
            data: jobId
        })
    } catch (error) {
        console.log(error)
    }
}



module.exports = { postData, getData, getDataID, filterData }
