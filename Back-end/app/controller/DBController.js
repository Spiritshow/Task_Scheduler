const pg = require('pg');
const {dbConfig, knexDBConfig} = require('../config/index');
const knex = require('knex')(knexDBConfig);
const client = new pg.Client(dbConfig);

client.connect(err => {
    if (err) throw err;
});

exports.queryDatabase = function(query) {
    return client.query(query).then(result => {
        console.log(result.rows);
        console.log(`Rows: ${result.rowCount}`);
        return result.rows;
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}

exports.getUsers = function() {
    return knex.select({
        id_user: 'id',
        username: 'username',
        img: 'img'
    })
    .from('users');
}
exports.insertUserKnex = function (tableU, tableA, dataU,dataA) {
    // return knex(table).insert(data).returning('id').then(id =>{
    //     return id[0];
    // })

    return knex.transaction(async trx => {
        const queryU = await trx(tableU).insert(dataU).returning('id');
        const queryA = await trx(tableA).insert({...dataA, iduser: queryU[0].id}).returning('id');
        const result = {idproject: queryU[0], enbly: queryA[0]};
        return result;
    })

};

exports.getTaskAtProject = function (idUser) {
    return knex.select('task.id', 'task.name', 'task.daycreate', 'task.daytarget', 'task.deadline', 'task.state')
    .from('task')
    .join('project', 'task.id_project', '=', 'project.id')
    .join('eligibility', 'project.id', '=', 'eligibility.idproject')
    .where({'eligibility.iduser': idUser});
}

exports.getProject = function (idUser) {
    return knex.select('project.id','project.name','project.daycreate','project.deadline','project.state')
    .from('project')
    .join('eligibility', 'project.id', '=', 'eligibility.idproject')
    .where({'eligibility.iduser': idUser})
}

exports.insertProjectAndEligibility = function (tableP,tableE, dataP, dataE) {
    return knex.transaction(async trx =>{
        const queryP = await trx(tableP).insert(dataP).returning('id');
        const queryE = await trx(tableE).insert({...dataE, idproject: queryP[0].id}).returning('id');
        const result = {idproject: queryP[0], enbly: queryE[0]};
        return result;
    })
}

exports.putProject = function (table,id,name, daycreate, deadline, state) {
    return knex(table)
        .where("id","=", id)
        .update({id,name,daycreate,deadline,state});
}

exports.deleteProject = function (idproject) {
    knex.transaction(async trx => {
        const queryE = await trx('eligibility').where({'idproject': idproject}).delete();
        const queryP = await trx('project').where({'id': idproject}).delete().returning('id');
        const queryT = await trx('task').where({'id': queryP[0].id}).delete().returning('id');
        const queryS = await trx('subtask').where({'id_task': queryT[0].id}).delete();
        const result = {idproject: queryP[0], enbly: queryE[0],idtask:queryT[0],sub:queryS[0]};
        return result;
    })
}

exports.getTask = function (table, id_project) {
    return knex.select('*')
            .from(table)
            .where({'id_project': id_project});
}

exports.postTask = function (table, data) {
    return knex(table).insert(data).returning('id').then(id => {
        return id[0];
    })
}

exports.putTask = function (table,id,data) {
    return knex(table)
        .where({'id': id})
        .update(data);
}

exports.deleteTask = function (tableT,tableS,id) {
    return knex.transaction( async trx => {
        const queryT = await trx(tableT)
            .where({'id': id})
            .delete().returning('id');
        const queryS = await trx(tableS)
            .where({'id_task': queryT[0].id})
            .delete();
            const result = {task: queryT[0], subtask: queryS[0]};
            return result;  
    })
}

exports.getSubtask = function (table, id_task) {
    return knex.select('*')
            .from(table)
            .where({'id_task': id_task});
}

exports.deleteSubtask = function (table,id) {
    return knex(table)
        .where({'id': id})
        .delete();
}

exports.getAuthentication = function (table,login) {
    return knex(table)
        .select('*')
        .where({'login': login})
}