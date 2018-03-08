const path=require('path');
const express=require('express')
const socketIo=require('socket.io');
const http=require('http');
const cors = require('cors');


const app =express();
app.use(cors());
let sock;
let server=http.createServer(app);
let io=socketIo(server);
io.on('connection',(socket)=>{
    console.log(socket.client.id)
    sock=socket;
})
app.get('/',(req,res)=>{
    res.send('hello there')
    sock.broadcoast.emit('newQuestion',{ques:"abc"});
})


app.listen(2018,(port)=>{
    console.log('app live on port 2018');
});