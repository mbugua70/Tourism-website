const profileEl = document.getElementById('profile-el');
const privateEl = document.getElementById('private-el');
const museumEl = document.getElementById('museum-el');
const nationalEl = document.getElementById('national-el');
const religiousEl = document.getElementById('religi-el');
const hikeEl = document.getElementById('hike-el');
const masaiEl = document.getElementById('masai-el');
const baringoEl = document.getElementById('baringo-el');
const nairoEl = document.getElementById('nairobi-el');
const dianiEl = document.getElementById('diani-el');


function openDiani() {
    window.open("https://www.google.com/maps/place/National+Museums+of+Kenya/@-1.2739629,36.814425,15z/data=!4m2!3m1!1s0x0:0x24eee4c08364a0f3?sa=X&ved=2ahUKEwjBu4rSh6n9AhX9T6QEHZseCdQQ_BJ6BQiLARAI");
}

function openNairo() {
    window.open("https://www.google.com/maps/place/National+Museums+of+Kenya/@-1.2739629,36.814425,15z/data=!4m2!3m1!1s0x0:0x24eee4c08364a0f3?sa=X&ved=2ahUKEwjBu4rSh6n9AhX9T6QEHZseCdQQ_BJ6BQiLARAI");
}

function openBaringo() {
    window.open("https://www.google.com/maps/place/Lake+Baringo/@0.6276522,36.0822669,12z/data=!3m1!4b1!4m6!3m5!1s0x1786cf9b80b81d2b:0xb6601e651892f2a0!8m2!3d0.6320551!4d36.0567202!16zL20vMGQ0MHg");
}


function openMasai() {
    window.open("https://www.google.com/maps/place/Masai+Mara+National+Reserve/@-1.4937121,35.144648,15z/data=!4m6!3m5!1s0x182cf7cda7bff40f:0xd8cd2c4993a8070d!8m2!3d-1.4937121!4d35.144648!16zL20vMDU0dmM");
}



function openProfile() {
    profileEl.setAttribute('href', '/profile/mainpage/main.html');
}

function openPrivate() {
    privateEl.setAttribute('href', '')
}

function openMeseum() {
    museumEl.setAttribute('href', '/museums/index.html');
}

function openNational() {
    nationalEl.setAttribute('href', '/nationalpark/images/index.html');
}

function openReligous() {
    religiousEl.setAttribute('href', '/Religioussite/index.html');
}

function openHike() {
    hikeEl.setAttribute('href', '/hikingtrails/index.html');
}

masaiEl.addEventListener('click', openMasai, false);
hikeEl.addEventListener('click', openHike, false);
religiousEl.addEventListener('click', openReligous, false);
nationalEl.addEventListener('click', openNational, false);
museumEl.addEventListener('click', openMeseum, false);
profileEl.addEventListener('click', openProfile, false);
privateEl.addEventListener('click', openPrivate, false);
baringoEl.addEventListener('click', openBaringo, false);
nairoEl.addEventListener('click', openNairo, false);
dianiEl.addEventListener('click')
