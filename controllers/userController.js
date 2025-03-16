// const express = require("express")
// const User = require("../models/UserModel")

// const createUser = async (req, res) => {
//     try {
//         const { name, email, company, job, dateOfBirth, religion, caste } = req.body

//         const dob = new Date(dateOfBirth)

//         if (isNaN(dob.getTime())) {
//             return res.status(400).json({ message: "Invalid Date of Birth" })
//         }

//         const newUser = new User({
//             name, email, company, job, dateOfBirth: dob, religion, caste
//         })

//         const savedUser = await newUser.save()
//         res.status(201).json(savedUser)
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// }

// const getUsers = async (req, res) => {
//     try {
//         const allUsers = await User.find().sort({ _id: -1 })
//         res.status(200).json(allUsers)

//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }

// }

// const getSingleUser = async (req, res) => {
//     try {
//         const { id } = req.params
//         const singleUser = await User.findById(id)
//         res.status(200).json(singleUser)
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// }

// const updateUser = async (req, res) => {
//     try {
//         const { id } = req.params
//         const { name, email, company, job, dateOfBirth, religion, caste } = req.body
//         const user = await User.findByIdAndUpdate(id, { name, email, company, job, dateOfBirth, religion, caste }, { new: true })
//         if (!user) return res.status(404).json({ error: "User not found" })

//         res.status(200).json(user)
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// }

// const deleteUser = async (req, res) => {
//     try {
//         const { id } = req.params
//         const userDelete = await User.findByIdAndDelete(id)
//         res.json(userDelete)
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// }

// module.exports = {
//     createUser,
//     getUsers,
//     getSingleUser,
//     updateUser,
//     deleteUser
// }