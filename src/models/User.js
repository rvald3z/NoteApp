const { Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
    
},  {
    timestamps: true
})

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    //Cifra la password
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = function (password) {
    bcrypt.compare(password, this.password);
};

module.exports = model('User', UserSchema);