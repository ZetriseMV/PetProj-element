const { Schema,model } = require('mongoose')

const SchemaModel = new Schema({
    brand:{type: String, required: true},
    execution:{type: String, required: true},
    construction:{type: String, required: true},
    power:{type: String, required: true},
    powerSteam:{type: String, required: true},
    countLevels:{type: String, required: true},
    regularSteam:{type: String, required: true},
    color:{type: String, required: true},
    volumeWater:{type: String, required: true},
    time:{type: String, required: true},
    price:{type: String, required: true},
    nameNoteBook:{type: String, required: true},
    category:{type: String, required: true}
})

module.exports = model('Telephone',SchemaModel)


