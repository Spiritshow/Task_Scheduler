const express = require("express");

const router = express.Router();
const userControllers = require('../controller/userController');


router.route("/api/user")
    .get((req,res) => {
        userControllers.showUsers(req,res);
    })

    .post((req,res) => {
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
    //search id_project
    .get((req,res) => {
        userControllers.showTask(req,res);
    })

    .post((req,res) => {
        userControllers.insertTask(req,res);
    })

    .put((req,res) => {
        userControllers.updateTask(req,res);
    })

    .delete((req, res) => {
        userControllers.deleteTask(req,res);
    })

router.route("/api/subtask")
    //search id_task
    .get((req,res) => {
        userControllers.showSubtask(req,res);
    })

    .post((req,res) => {
        userControllers.insertSubtask(req,res);
    })

    .put((req,res) => {
        userControllers.updateSubtask(req,res);
    })

    .delete((req,res) => {
        userControllers.deleteSubtask(req,res);
    })

router.route("/api/authentication")
    .post((req,res) => {
        userControllers.showAuthentication(req,res);
    })

module.exports = router;