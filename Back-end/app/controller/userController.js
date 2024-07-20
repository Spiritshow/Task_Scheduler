const knex = require('knex');
const bcrypt = require('bcrypt');


const DBController = require('./DBController');
const { escape } = require('mysql');

exports.showUser = (req,res) => {
    const idUser = req.cookies.id_user;
    DBController.getUser(idUser).then(rows => {res.send(rows)})
};

exports.createUser = function createUser(req,res) {
    const body = req.body;
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(body.password,salt);
    DBController.insertUserKnex('users', 'authentication',{username: body.username, img: body.img},{login: body.login, password: hash}).then(result => {
        res.cookie('id_user', result.id, {httpOnly: false, maxAge: 24 * 60 * 60 * 1000});
        res.status(200).send(result);
    })
}

exports.showTaskAtProject = (req, res) => {
    //const searchParams = new URLSearchParams(req.url);
    //const idUser = searchParams.get('/api/task?search'); /* мне не понраву /api/task?search когда должно быть просто search*/
    const filter = req.query.search;

    const idUser = req.cookies.id_user;
    if (filter === "all"){
        DBController.getTaskAtProject(idUser).then(rows => {
            const today = new Date();
            const rowsFilTarget = rows.filter(item => item.daytarget <= today)
            res.send(rowsFilTarget)
        })
    }
    else{
        DBController.getTaskAtProjectFilter(idUser,filter).then(rows => {
            const today = new Date();
            const rowsFilTarget = rows.filter(item => item.daytarget <= today)
            res.send(rowsFilTarget)
        })   
    };
};

exports.showProject = (req, res) => {
    const filter = req.query.search;
    const idUser = req.cookies.id_user;
    if(filter === 'all'){
        DBController.getProject(idUser).then(rows => {
            res.send(rows);
        })}
    else{
        DBController.getProjectFilter(idUser,filter).then(rows => {
            res.send(rows);
        })
    }
};

exports.createProject = (req,res) => {
    const body = req.body;
    const cookie = req.cookies.id_user;
    DBController.insertProjectAndEligibility('project','eligibility',{name: body.name, deadline: body.deadline},{iduser: cookie}).then(result => {
        res.status(201).send(result);
    })
}

exports.updateProject = (req,res) => {
    const body = req.body;

    DBController.putProject('project',body.id, body.name, body.daycreate, body.deadline, body.state).then(result => {
        res.status(201).send(`${result}`);
    })
}

exports.updateStateProject = (req,res) => {
    const body = req.body;
    DBController.putStateProject('project', body.id, {state: body.state}).then(result => {
        res.status(200).send(`${result}`);
    })
}

exports.deleteProject = (req,res) => {
    const id = req.query.search;
    DBController.deleteProject(id).then(result => {
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
    DBController.putSubtask('task',body.id,{name: body.name, daycreate: body.daycreate , daytarget: body.daytarget, deadline: body.deadline, state: body.state, id_project: body.id_project}).then(result => {
        res.status(201).send(`${result}`);
    })
}

exports.deleteTask = (req,res) => {
    const id = req.query.search;
    DBController.deleteTask('task','subtask',id).then(result => {
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
    DBController.putSubtask('subtask', body.id, {name: body.name, state: body.state, id_task: body.id_task}).then(result => {
        res.status(200).send(result);
    })
}

exports.deleteSubtask = (req,res) => {
    const id = req.query.search;

    DBController.deleteSubtask('subtask',id).then(result => {
        res.status(200).send(`${result}`);
    })
}

exports.showAuthentication = (req,res) => {
    const body = req.body;

    DBController.getAuthentication('authentication',body.login).then(result => {
        if (result[0]) {
            if (bcrypt.compareSync(body.password, result[0].password)) {
                res.cookie('id_user', result[0].iduser, {httpOnly: false, maxAge: 24 * 60 * 60 * 1000});
                res.status(200).send(result);
            }else {
                res.status(401).send();
            }    
        }else { 
            res.status(404).send();
        }
    })
}