const path=require('path');
const express=require('express')
const socketIo=require('socket.io');
const http=require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app =express();
app.use(cors());
app.use(bodyParser.json());
let server=http.createServer(app).listen(2018,(port)=>{
    console.log('app live on port 2018');
});
let io=socketIo(server);
io.on('connection',(socket)=>{
    console.log(socket.client.id)
  
})
app.get('/',(req,res)=>{
    res.send('hello there')
})
app.post('/',(req,res)=>{
    let ques = _.pick(req.body, ['ques']);
    res.send("Question posted");
    io.emit('newQuestion',ques);
})

