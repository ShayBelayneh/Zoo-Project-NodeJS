const express = require('express');
const router = express.Router();
const animalControllers = require('../../controllers/animals-cntrl');

router.get('/' , animalControllers.getAllAnimals);
router.get('/:id' , animalControllers.getByIdAnimal);
router.post('/' , animalControllers.postAnimals);
router.put('/:id' , animalControllers.putMethodAnimal);
router.delete('/:id' , animalControllers.deleteMethod);


module.exports= router;