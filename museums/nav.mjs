
var parentEl = document.createElement('div');
var mainEl = document.getElementById('main-el');
parentEl.setAttribute('class','box');
const homeEl = document.getElementById('home-el');
const profileEl = document.getElementById('profile-el');
const privateEl = document.getElementById('private-el');
const  museumEl  = document.getElementById('museum-el');
const   nationalEl = document.getElementById('national-el');
const religiousEl = document.getElementById('religi-el');
const hikeEl =document.getElementById('hike-el');


function openProfile(){
    profileEl.setAttribute('href','/Tourismmmsystem/profile/mainpage/main.html');
}

function openPrivate(){
    privateEl.setAttribute('href','')
}

function openMeseum(){
    museumEl.setAttribute('href','/Tourismmmsystem/museums/index.html');
}

function openNational(){
    nationalEl.setAttribute('href','/Tourismmmsystem/nationalpark/images/index.html');
}

function openReligous (){
    religiousEl.setAttribute('href','/Tourismmmsystem/Religioussite/index.html');
}

function openHike(){
    hikeEl.setAttribute('href','/Tourismmmsystem/hikingtrails/index.html');
}

function openHome(){
    homeEl.setAttribute('href','/Tourismmmsystem/landingpage2/homes/index.html');
}

homeEl.addEventListener('click',openHome,false);
hikeEl.addEventListener('click',openHike,false);
religiousEl.addEventListener('click',openReligous,false);
nationalEl.addEventListener('click',openNational,false);
profileEl.addEventListener('click',openProfile,false);
privateEl.addEventListener('click',openPrivate,false);
