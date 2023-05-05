
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
const  lamEl = document.getElementById('lamu-el');
const kapeEl = document.getElementById('kape-el');


function openKape(){
    window.open("https://www.google.com/maps/place/Kapenguria+Museum/@1.2433462,35.1259631,16.08z/data=!4m6!3m5!1s0x178236069ac6b319:0x8adc7909ebcfe19d!8m2!3d1.2395014!4d35.1206621!16s%2Fm%2F0swlvjn");
}


function openLamu(){
    window.open("https://www.google.com/maps/place/National+Museums+of+Kenya-Lamu+Museum/@-2.267322,40.9022271,15z/data=!4m2!3m1!1s0x0:0x12ac5332e4ead1e?sa=X&ved=2ahUKEwiV5tb4jKn9AhXSWaQEHSqcBtgQ_BJ6BAhrEAg");
}


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
lamEl.addEventListener('click',openLamu,false);
kapeEl.addEventListener('click',openKape,false);