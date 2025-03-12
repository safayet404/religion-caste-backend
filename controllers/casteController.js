const Caste = require("../models/Caste");
const Religion = require("../models/ReligionModel");


const createCaste = async (req, res) => {
    try {
        const { name, religionId } = req.body
        const religion = await Religion.findById(religionId)

        if (!religion) return res.status(404).json({ error: 'Religion not found' });

        const caste = new Caste({
            name,
            religion: religion._id
        })

        await caste.save()

        religion.castes.push(caste._id)
        await religion.save()

        res.status(201).json(caste)
    } catch (error) {
        throw new Error(error)
    }
}

const getCastes = async (req, res) => {
    try {
        const castes = await Caste.find().populate('religion').sort({ _id: - 1 });
        res.status(200).json(castes)


    } catch (error) {
        throw new Error(error)
    }
}

const getSingleCaste = async (req, res) => {
    try {
        const { id } = req.params
        const singleCaste = await Caste.findById(id)
        res.status(201).json(singleCaste)

    } catch (error) {
        throw new Error(error)
    }
}

const updateCaste = async (req, res) => {
    try {
        const { id } = req.params
        const { name } = req.body
        const caste = await Caste.findByIdAndUpdate(id, { name }, { new: true })

        if (!caste) return res.status(404).json({ error: 'Caste not found' })

        res.status(200).json(caste)
    } catch (error) {
        throw new Error(error)
    }
}

const deleteCaste = async (req, res) => {
    try {
        const { id } = req.params
        const caste = await Caste.findByIdAndDelete(id)
        if (!caste) return res.status(404).json({ error: "Caste not found" })

        const religion = await Religion.findById(caste.religion)
        religion.castes.pull(caste._id)
        await religion.save()

        res.status(200).json({ message: "Caste deleted successfully" })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    createCaste,
    getCastes,
    getSingleCaste,
    updateCaste,
    deleteCaste
}