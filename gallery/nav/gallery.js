const contactEl  = document.getElementById('contact-el');
const homeEl = document.getElementById('home-el');
const aboutEl = document.getElementById('about-el');
const loginEl = document.getElementById('login-el');
const buttonEl = document.getElementById('button-el');
const headerEl = document.getElementById('header-el');
const anchorEl = document.getElementsByTagName('a');
const logoEl = document.getElementById('logo-el');

function openContactPage(){

    contactEl.setAttribute('href','/Tourismmmsystem/contact/contact.html');
}

function openHomePage(){
    homeEl.setAttribute('href','/Tourismmmsystem/landingpage/mainfile/index.html');
}
function openAboutPage(){
    aboutEl.setAttribute('href','/Tourismmmsystem/landingpage/mainfile/index.html');
}

function openLoginPage(){
    loginEl.setAttribute('href','/Tourismmmsystem/login/login.html');
}

function openMycontact(){
    window.open("http://127.0.0.1:5502/Tourismmmsystem/contact/contact.html");
}


window.onscroll=function backgroundChange (){
    const scrollY = window.scrollY;
    if(scrollY > 150){
        headerEl.style.backgroundColor = "rgb(214, 36, 71)";
        headerEl.style.height = "80px";
        logoEl.style.borderColor ="#fff";
        for(let i= 0; i <= anchorEl.length;i++){
                anchorEl[i].className='hoverclass2';
        }
    }else{
        headerEl.style.height = "0px";
        headerEl.style.backgroundColor= "transparent";
        logoEl.style.borderColor ="crimson";
        for(let i= 0; i <= anchorEl.length;i++){
        anchorEl[i].className = 'hoverclass1';
    }
    }

}


contactEl.addEventListener('click',openContactPage,false);
homeEl.addEventListener('click',openHomePage,false);
loginEl.addEventListener('click',openLoginPage,false);
buttonEl.addEventListener('click',openMycontact,false);
aboutEl.addEventListener('click',openAboutPage,false);
