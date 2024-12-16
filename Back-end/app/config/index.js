const { connect } = require("../routes")


exports.host = "localhost"
exports.port = 5432
exports.dbConfig = {
    // host: "localhost",
    user: "postgres",
    password: "1502",
    database: "test",
    port: 5432,
    ssl: false
}
exports.knexDBConfig = {
    client: 'pg',
    version: '7.2',
    connection: {
        // host: "localhost",
        user: "postgres",
        password: "1502",
        database: "test",
        port: 5432,
        ssl: false
    }
}