const { mongoose } = require('./db');

var QuestionSchema = new mongoose.Schema({
    ques: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    keys: {
        type: String,
        required: true
    },
    atTime: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true,
        minlength: 1
    }
})
QuestionSchema.statics.checkAns = async function (body) {
    let question = await this.findById(body.q_id).catch(e => { console.log(JSON.stringify(e, null, 2)) })
    if (question) {
        let ans = question.keys.split(",")
        for (let i = 0; i < ans.length; i++) {
            if (body.ans.indexOf(ans[i]) > -1)
                return true
        }
        return false
    }
    else
        console.log("Question not found")
}

var Question = mongoose.model('Question', QuestionSchema);
module.exports = { Question }