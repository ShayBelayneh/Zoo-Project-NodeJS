const animalsModel = require('../models/animals-model');

const getAllAnimals = async (req,res)=>{
    await animalsModel
    .find((err, result) => {
      if (err) return res.status(404).send({ massage: err })
      res.send(result)
    })
    .clone()
}

const getByIdAnimal = async (req, res) => {
  await animalsModel
    .findById(req.params.id, (err, result) => {
      if (err) return res.status(404).send({ massage: err })
      res.send(result)
    })
    .clone()
}

const postAnimals = async (req , res)=>{
    await animalsModel
    .create(req.body)
    .then(result => res.send(` add ${result}`))
    .catch(err => res.status(404).send({ massage: err }))
}

const putMethodAnimal = (req, res) => {
  animalsModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.send(result))
    .catch(err => console.log(err))
}

const deleteMethod = (req, res) => {
  animalsModel
    .findByIdAndDelete(req.params.id, req.body)
    .then(result =>
      res
        .send(`Delete ${req.params.id}`)
        .catch(err => res.status(404).send({ massage: err }))
    )
}

module.exports = {getAllAnimals,getByIdAnimal,postAnimals,putMethodAnimal,deleteMethod}