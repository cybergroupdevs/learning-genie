const axios=require('axios')
const io = require('socket.io-client');
const socket=io('https://localhost:2018');
console.log("calling api");
let msgs = document.querySelector('div');
// axios.get('http://localhost:3000/users').then( (res) => {
//   msgs.innerHTML="got a new msg";
//   msgs.hidden=false;
//  })
socket.on('newQuestion',(res)=>{
  msgs.innerHTML="got a new msg";
  setTimeout(()=>{
    msgs.innerHTML=res.ques;
  },300)
  msgs.hidden=false;
})


 