const { Schema,model } = require('mongoose')

const SchemaModel = new Schema({ 
    firsLine: { type: String, required: true }, 
    secondLine: { type: String, required: true }, 
    thirdLine: { type: String, required: true }, 
    fourthLine: { type: String, required: true }, 
    fifthLine: { type: String, required: true }, 
    sixthLine: { type: String, required: false }, 
    seventhLine: { type: String, required: false }, 
    eighthLine: { type: String, required: false }, 
    ninethLine: { type: String, required: false }, 
    tenthLine: { type: String, required: false }, 
    price: { type: String, required: true }, 
    nameProduct: { type: String, required: true }, 
    category: { type: String, required: true }, 
    link: { type: String, required: true }, 
}, { strict: false });

module.exports = model('categoriesProducts',SchemaModel)


