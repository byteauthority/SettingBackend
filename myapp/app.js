const express = require('express')
const {createUser, readUsers, updateUser, deleteUser} = require('./crud')
const app = express();

// app.use = express();
app.use(express.static('public'));

app.get('/users', (req,res) => {
    readUsers((err,rows) => {
        if (err){
            res.status(500).send(err.message)
        }
        else {
            res.status(200).json(rows)
        }
    })
})

app.post('/users', (req,res) => {
    const {name, email} = req.body
    createUser(name, email, (err,data) => {
        if(err){
            res.status(500).send(err.message)
        }
        else{
            res.status(201).send(`User is added ID : ${data.id}`)
        }
    })
})

app.put('/items/:id', (req,res) => {
    const {name, email} = req.body;
    updateUser(req.params.id, name, email, (err) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else{
          res.status(200).send("Updated user")
        }
    })
})
app.delete('/users/:id', (req,res) => {
    deleteUser(req.params.id, (err) => {
        if(err){
            res.status(500).send(err.message)
        }
        else {
            res.status(200).send("Deleted")
        }
    })
})


app.listen(3000, () => {
    console.log("Server is running")
})