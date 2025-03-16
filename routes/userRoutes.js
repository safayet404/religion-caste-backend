const express = require("express")
const { createUser, getUsers, getSingleUser, updateUser, deleteUser } = require("../controllers/userController")

const router = express.Router()


router.post("/create-user", createUser)
router.get("/get-users", getUsers)
router.get("/single-user/:id", getSingleUser)
router.put("/update-user/:id", updateUser)
router.delete("/delete-user/:id", deleteUser)
module.exports = router