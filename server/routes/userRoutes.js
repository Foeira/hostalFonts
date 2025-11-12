const { Router } = require("express")
const { getUsers, createUser, loginUser, logOutUser } = require("../controllers/userController")
const {auth} = require("../midleware/authMiddleware")
const router = Router()
//Get all users
router.get("/", auth, getUsers)

//Create User
router.post("/", createUser)

//login user
router.post("/login", loginUser)

//logout user
router.get("/logout", logOutUser)

module.exports = router