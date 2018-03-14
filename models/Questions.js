const mongoose=require('mongoose');
var QuestionSchema = new mongoose.Schema({
    ques :{
        type: String,
        required: true,
        minlength:10,
        unique: true,
        trim: true
    },
    atTime:{
        type: String,
        required:true
    },
    team:{
        type:String,
        required:true,
        minlength:1
    }
}) 

var Question=mongoose.model('Question',QuestionSchema);
module.exports={Question}