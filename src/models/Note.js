const { Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    }
    
},  {
    timestamps: true
})

module.exports = model('Note', NoteSchema);