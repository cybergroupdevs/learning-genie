const { mongoose } = require('./db');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        trim: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    token: {
        type: String,
        required: true
    },
    team: {
        required: true,
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

var User = mongoose.model('Users', UserSchema);
module.exports = { User }