const knex = require('knex');

const DBController = require('./DBController');
const { escape } = require('mysql');

exports.showUsers = (req,res) => {
    DBController.getUsers().then(rows => {res.send(rows)})
};

exports.createUser = function createUser(req,res) {
    const body = req.body;
    DBController.insertUserKnex('users',{id: body.id, username: body.username, img: body.img}).then(result => {
        res.send(result);
    })
}

exports.showTaskAtProject = (req, res) => {
    //const searchParams = new URLSearchParams(req.url);
    //const idUser = searchParams.get('/api/task?search'); /* мне не понраву /api/task?search когда должно быть просто search*/
    const idUser = req.query.search;
    DBController.getTaskAtProject(idUser).then(rows => {
        const today = new Date();
        const rowsFilTarget = rows.filter(item => item.daytarget <= today)
        const rowsFiltr = rowsFilTarget.filter(item => item.state != 'green')
        res.send(rowsFiltr)
    });
};

exports.showProject = (req, res) => {
    const idUser = req.query.search;
    DBController.getProject(idUser).then(rows => {
        res.send(rows);
    })
};

exports.createProject = (req,res) => {
    const body = req.body;
   
    DBController.insertProjectAndEligibility('project','eligibility',{name: body.name, deadline: body.deadline},{iduser: body.iduser}).then(result => {
        res.status(201).send(result);
    })
}

exports.updateProject = (req,res) => {
    const body = req.body;

    DBController.putProject('project',body.id, body.name, body.daycreate, body.deadline, body.state).then(result => {
        res.status(201).send(`${result}`);
    })
}

exports.deleteProject = (req,res) => {
    const body = req.body;
    DBController.deleteProject('project','eligibility',body.id).then(() =>{
        res.status(200);
    })
}