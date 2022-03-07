const express = require('express');
const router = express.Router();
const employeeControllers = require('../controllers/employees-cntrl');

router.get('/' , employeeControllers.getAllEmployees);
router.get('/:id' , employeeControllers.getByIdEmployees);
router.post('/' , employeeControllers.postEmployees);
router.put('/:id' , employeeControllers.putMethodEmployees);
router.delete('/:id' , employeeControllers.deleteMethodEmployees);


module.exports= router;