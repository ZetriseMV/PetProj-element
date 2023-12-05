const { Schema,model } = require('mongoose')

const SchemaModel = new Schema({
    brand:{type: String, required: true},
    typeTVScreen:{type: String, required: true},
    formScreen:{type: String, required: true},
    yearTyping:{type: String, required: true},
    seria:{type: String, required: true},
    tvTuner:{type: String, required: true},
    smartTV:{type: String, required: true},
    operatingSystem:{type: String, required: true},
    color:{type: String, required: true},
    diagonalScreen:{type: String, required: true},
    permission:{type: String, required: true},
    price:{type: String, required: true},
    nameTV:{type: String, required: true},
    category:{type: String, required: true}
})

module.exports = model('Telephone',SchemaModel)


