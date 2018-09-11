const { mongoose } = require('./db');

var TeamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        trim: true
    }
})

var Team = mongoose.model('Teams', TeamSchema);
module.exports = { Team }