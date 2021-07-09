const {Schema, model} = require('mongoose')

const presagioSchema = Schema({

    texto: {
        type: String,
        required: [true, 'Inserta un presagio']
    }, 
    color: {
        type: String, 
        required: [true, 'Inserta un color']
    }

})

presagioSchema.methods.toJSON = function(){
    const {__v, /*password,*/ ...data} = this.toObject() 
    return data
}

module.exports = model('Presagio', presagioSchema)