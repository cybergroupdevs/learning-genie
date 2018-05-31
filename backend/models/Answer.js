const mongoose=require('mongoose');
var AnswerSchema = new mongoose.Schema({
    ans:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    correct: {
        type: Boolean,
        required: true,
        default: false
    },
    q_id:{
        type:String,
        required:true
    },
    u_id:{
        type:String,
        required:true
    },
    atTime:{
        type: String,
        required:true
    }
}) 

var Answer=mongoose.model('Answers',AnswerSchema);
module.exports={Answer}