require('./config/config')
const path = require('path');
const express = require('express')
const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const _ = require('lodash');
const { ObjectId } = require('mongodb');
const {Answer}=require('./models/Answer')

const { mongoose } = require('./models/db');
const { Question } = require('./models/Questions')

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(bodyParser.json());
let server = http.createServer(app).listen(port, (p) => {
    console.log(`app live on ${port}`);
});
let io = socketIo(server);
io.on('connection', (socket) => {
    console.log(socket.client.id)

})
app.get('/', (req, res) => {
    res.send('hello there')
})
app.post('/', (req, res) => {
    let body = _.pick(req.body, ['ques', 'team']);
    body.atTime = new Date().getTime();
    let question = new Question(body)
    question.save().then((question) => {
        if(!question){
            res.status(404).send();
            res.end();
        }
        else{
            res.send("Question posted");
            io.emit('newQuestion', question);
        }
    })
  
  
})
app.post('/answer', (req, res) => {
    let body = _.pick(req.body, ['q_id','ans','u_id']);
    body.atTime = new Date().getTime();
    let answer=new Answer(body);
    answer.save().then((ans)=>{
        if(!answer){
            res.status(404).send("error");
            res.end();
        }
        else{
            res.send("response submitted");
            res.end();
        }
    })
    res.send("Answer Submitted");
})

