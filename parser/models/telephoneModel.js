const { Schema,model } = require('mongoose')

const SchemaModel = new Schema({
    typeVacuum:{type: String, required: true},
    typeCleaning:{type: String, required: true},
    typeCollectionVacuum:{type: String, required: true},
    typeNutrition:{type: String, required: true},
    typePower:{type: String, required: true},
    color:{type: String, required: true},
    other:{type: String, required: true},
    volume:{type: String, required: true},
    filtreVacuum:{type: String, required: true},
    typeFilter:{type: String, required: true},
    price:{type: String, required: true},
    nameVacuum:{type: String, required: true},
    category:{type: String, required: true}
})

module.exports = model('Telephone',SchemaModel)


