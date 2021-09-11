
const Fahrin = document.querySelector('input');
const Fahrout = document.querySelector('#Fahr');
const Celcout = document.querySelector('#Celc');

const convertbutton = document.querySelector('button');

function convert() {
    let syote = Fahrin.value;
    Fahrout.textContent = syote;

    var fToCel = (Fahrin.value - 32) * 5 / 9;
    Celcout.textContent = fToCel;
}


convertbutton.addEventListener('click', convert);
