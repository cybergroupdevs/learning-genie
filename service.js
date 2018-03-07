const axios=require('axios')

let msg = document.querySelector('data');
axios.get('http://localhost:3000/users', (res) => {
   console.log(JSON.stringify(res));
  }
)
msg.innerHTML = "mma;m";

 