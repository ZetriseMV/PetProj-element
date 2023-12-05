const { Schema,model } = require('mongoose')

const TelephoneSchema = new Schema({
    brand:{type: String, required: true},
    typeSmartphone:{type: String, required: true},
    yearTyping:{type: String, required: true},
    standartsConnextion:{type: String, required: true},
    operatingSystem:{type: String, required: true},
    operatingVersion:{type: String, required: true},
    ruler:{type: String, required: true},
    amountSim:{type: String, required: true},
    formatSim:{type: String, required: true},
    supporteSIM:{type: String, required: true},
    complectation:{type: String, required: true},
    price:{type: String, required: true},
    namePhone:{type: String, required: true},
    category:{type: String, required: true}
})

const TVSchema = new Schema({
    brand:{type: String, required: true},
    
})

module.exports = model('Telephone',TelephoneSchema)


