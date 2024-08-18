const db = require('./database')

// CREATE

const createUser = (name, email, callback) => {
    const sql = `INSERT INTO users (name, email) VALUES (?, ?)`
    db.run(sql, [name, email], function(err){
        callback(err, {id: this.lastID})
    })
}

const readUsers = (callback) => {
    const sql = `SELECT * FROM users`;
    db.all(sql, [], callback)
}

const updateUser = (id, name, email, callback) => {
    const sql = `UPDATE users SET name = ?, email = ?, WHERE id = ?`
    db.run(sql, [name,email,id], callback)
}

const deleteUser = (id, callback) => {
    const sql = `DELETE FROM users WHERE id = ?`
    db.run(sql, id, callback)
}

module.exports = {createUser, readUsers, updateUser, deleteUser}