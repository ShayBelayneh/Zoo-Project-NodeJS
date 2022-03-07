const mongoose = require('mongoose');
const schema = mongoose.Schema;

const AnimalsSchema = new schema({
    animalName: {type: String , required:true},
    animalBirthDate: {type: Date , required:false, default: 01-01-2000},
    animalCageNumber: {type: Number , required:true},
    animalSex: {type: String , required:true},
    animalType: {type: String , required:true},

},
{ timestamps: true }
)

module.exports = mongoose.model('animals' , AnimalsSchema);