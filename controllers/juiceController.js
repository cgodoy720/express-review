const express = require('express')
const app = require('../app')
const juiceArr = require('../models/juice')
// Setting up router for our juice
const juice = express.Router()



// GET all the juices
juice.get('/', (req, res, next) => {
    res.json(juiceArr)
})


// GET one of the juices
// ':id' means the path gets a variable as the parameter
juice.get('/:id', (req, res, next) => {
    const id = req.params.id
    res.json(juiceArr[id])
})


// POST a new juice to the juiceArr
juice.post('/', (req, res, next) => {
    juiceArr.push(req.body)
    res.json(juiceArr)
})

// PUT (update) a single juice w the info from req.body
juice.put('/:id', (req, res, next) => {
    const id = req.params.id
    juiceArr.splice(id, 1, req.body)
    res.json(juiceArr)
})

// DELETE one of the juices
juice.delete('/:id', (req, res, next) => {
    const id = req.params.id
    // Splice helps us to remove an element that is not at the end or the beginning
    juiceArr.splice(id, 1)
    res.json(juiceArr)
})

module.exports = juice