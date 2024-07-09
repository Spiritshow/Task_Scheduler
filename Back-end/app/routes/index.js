const express = require("express");

const router = express.Router();
const userControllers = require('../controller/userController');


router.route("/api/user")
    .get((req,res) => {
        userControllers.showUsers(req,res);
    })

    .post((req,res) => {
        console.log(req.body);
        userControllers.createUser(req,res);

    })
//search iduser
router.route("/api/taskAtProject")
    .get((req,res) => {
        userControllers.showTaskAtProject(req,res);
    })

router.route("/api/project")
    //search iduser
    .get((req, res) => {
        userControllers.showProject(req,res);
    })
    //search iduser
    .post((req,res) => {
        userControllers.createProject(req,res);
    })
    //search iduser
    .put((req,res) => {
        userControllers.updateProject(req,res);
    })
    // search idproject
    .delete((req,res) => {
        userControllers.deleteProject(req,res);
    })

router.route("/api/task")
    .get((req,res) => {
        
    })

module.exports = router;