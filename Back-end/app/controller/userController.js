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

exports.showTask = (req,res) => {
    const id_project = req.query.search;
    DBController.getTask('task',id_project).then(rows => {
        res.status(200).send(rows);
    })
}

exports.insertTask = (req,res) => {
    const body = req.body;
    DBController.postTask('task',{name: body.name, daytarget: body.daytarget, deadline: body.deadline, id_project: body.id_project }).then(rows => {
        res.status(201).send(rows);
    })
}

exports.updateTask = (req,res) => {
    const body = req.body;
    DBController.putTask('task',body.id,{name: body.name, daycreate: body.daycreate , daytarget: body.daytarget, deadline: body.deadline, state: body.state, id_project: body.id_project}).then(result => {
        res.status(201).send(`${result}`);
    })
}

exports.deleteTask = (req,res) => {
    const body = req.body;
    DBController.deleteTask('task',body.id).then(result => {
        res.status(200).send(`${result}`);
    })
}

exports.showSubtask = (req,res) => {
    const id_task = req.query.search;
    DBController.getSubtask('subtask',id_task).then(rows => {
        res.status(200).send(rows);
    })
}

exports.insertSubtask = (req,res) => {
    const body = req.body;
    DBController.postTask('subtask',{name: body.name, id_task: body.id_task}).then(result => {
        res.status(201).send(result);
    })
}

exports.updateSubtask = (req,res) => {
    const body = req.body;
    DBController.putTask('subtask', body.id, {name: body.name, state: body.state, id_task: body.id_task}).then(result => {
        res.status(200).send(`${result}`);
    })
}

exports.deleteSubtask = (req,res) => {
    const body = req.body;
    DBController.deleteSubtask('subtask',body.id).then(result => {
        res.status(200).send(`${result}`);
    })
}