
const socket=io('http://localhost:2018');
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


 