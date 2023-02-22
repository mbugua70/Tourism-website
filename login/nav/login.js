const loginEl = document.getElementById('login-el');


function openSignUppage(){
   window.open("http://127.0.0.1:5502/Tourismmmsystem/login/signup.html");

}



loginEl.addEventListener('click',openSignUppage,false);