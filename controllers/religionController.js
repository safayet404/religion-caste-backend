const Caste = require("../models/Caste");
const Religion = require("../models/ReligionModel");


const createReligion = async (req, res) => {
    try {
        const { name, description, isActive } = req.body
        const religion = new Religion({ name, description, isActive })
        await religion.save()
        res.status(201).json(religion)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getReligions = async (req, res) => {
    try {
        const religions = await Religion.find().populate('castes').sort({ _id: - 1 });
        res.status(200).json(religions)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getSingleReligions = async (req, res) => {
    try {
        const { id } = req.params
        const singleReligions = await Religion.findById(id)
        res.status(200).json(singleReligions)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateReligion = async (req, res) => {
    try {
        const { id } = req.params
        const { name, description, isActive } = req.body
        const religion = await Religion.findByIdAndUpdate(id, { name, description, isActive }, { new: true })

        if (!religion) return res.status(404).json({ error: "Religion not found" })

        res.status(200).json(religion)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteReligion = async (req, res) => {
    const { id } = req.params
    try {
        const deleteReligion = await Religion.findByIdAndDelete(id)
        res.json(deleteReligion)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createReligion,
    getReligions,
    getSingleReligions,
    updateReligion,
    deleteReligion
}