const homeEl = document.getElementById('home-el');
const galleryEl = document.getElementById('gallery-el');
const loginEl = document.getElementById('login-el');
const contactEl = document.getElementById('contact-el');
const headerEl = document.getElementById('header-el');
const anchorEl = document.getElementsByTagName('a');
const logoEl = document.getElementById('logo-el');

function homePage(){
    homeEl.setAttribute("href","index.html");

}

function openGalleryPage(){
    galleryEl.setAttribute('href','/Tourismmmsystem/gallery/page/gallery.html');

}

function openLoginPage(){
    loginEl.setAttribute('href','/Tourismmmsystem/login/login.html');
}

function openContactPage(){
    contactEl.setAttribute('href','/Tourismmmsystem/contact/contact.html');
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



homeEl.addEventListener('click',homePage,false);
galleryEl.addEventListener('click',openGalleryPage,false);
loginEl.addEventListener('click',openLoginPage,false);
contactEl.addEventListener('click',openContactPage,false);
