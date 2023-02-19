const galleryEl  = document.getElementById('gallery-el');
const homeEl = document.getElementById('home-el');
const loginEl = document.getElementById('login-el');
const aboutEl = document.getElementById('home-els');


function openGalleryPage(){

    galleryEl.setAttribute('href','/Tourismmmsystem/gallery/page/gallery.html');
}

function openHomePage(){
    homeEl.setAttribute('href','/Tourismmmsystem/landingpage/mainfile/index.html');
}

function openLoginPage(){
    loginEl.setAttribute('href','/Tourismmmsystem/login/login.html');
}

function openAboutPage(){
    aboutEl.setAttribute('href','/Tourismmmsystem/landingpage/mainfile/index.html');
}


galleryEl.addEventListener('click',openGalleryPage,false);
homeEl.addEventListener('click',openHomePage,false);
loginEl.addEventListener('click',openLoginPage,false);
aboutEl.addEventListener('click',openAboutPage,false);