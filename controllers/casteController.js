const Caste = require("../models/Caste");
const Religion = require("../models/ReligionModel");


const createCaste = async (req, res) => {
    try {
        const { name, religionId, description } = req.body
        const religion = await Religion.findById(religionId)
        if (!religion) return res.status(404).json({ error: 'Religion not found' });
        const caste = new Caste({
            name,
            description,
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
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}

const getCastesByReligion = async (req, res) => {
    try {
        const { religionId } = req.params;
        const castes = await Caste.find({ religion: religionId });

        if (!castes.length) {
            return res.status(404).json({ message: "No castes found for this religion." });
        }

        res.status(200).json(castes);
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
};

const getSingleCaste = async (req, res) => {
    try {
        const { id } = req.params
        const singleCaste = await Caste.findById(id)
        res.status(201).json(singleCaste)

    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}

const updateCaste = async (req, res) => {
    try {
        const { id } = req.params
        const { name, description } = req.body
        const caste = await Caste.findByIdAndUpdate(id, { name, description }, { new: true })

        if (!caste) return res.status(404).json({ error: 'Caste not found' })

        res.status(200).json(caste)
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
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
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}

module.exports = {
    createCaste,
    getCastes,
    getSingleCaste,
    updateCaste,
    deleteCaste,
    getCastesByReligion
}