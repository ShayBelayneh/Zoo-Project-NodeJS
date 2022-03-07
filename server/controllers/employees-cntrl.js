const employeesModel = require('../models/employees-model');

const getAllEmployees = async (req,res)=>{
    await employeesModel
    .find((err, result) => {
      if (err) return res.status(404).send({ massage: err })
      res.send(result)
    })
    .clone()
}

const getByIdEmployees = async (req, res) => {
  await employeesModel
    .findById(req.params.id, (err, result) => {
      if (err) return res.status(404).send({ massage: err })
      res.send(result)
    })
    .clone()
}

const postEmployees = async (req , res)=>{
    await employeesModel
    .create(req.body)
    .then(result => res.send(` add ${result}`))
    .catch(err => res.status(404).send({ massage: err }))
}

const putMethodEmployees = (req, res) => {
  employeesModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.send(result))
    .catch(err => console.log(err))
}

const deleteMethodEmployees = (req, res) => {
  employeesModel
    .findByIdAndDelete(req.params.id, req.body)
    .then(result =>
      res
        .send(`Delete ${req.params.id}`)
        .catch(err => res.status(404).send({ massage: err }))
    )
}

module.exports = {getAllEmployees,getByIdEmployees,postEmployees,putMethodEmployees,deleteMethodEmployees}