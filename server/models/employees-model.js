const mongoose = require('mongoose');
const schema = mongoose.Schema;

const EmployeeSchema = new schema({
    employeeFullName: {type: String , required:true},
    employeePart: {type: String , required:true},
    employeeGmail: {type: String , required:true , unique:true , match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},
    employeePhone: {type: Number , required:true},
},
{ timestamps: true }
)

module.exports = mongoose.model('employee' , EmployeeSchema);