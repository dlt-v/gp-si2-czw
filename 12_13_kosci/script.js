let punkty = [];
let punktyRundy = 0;

// Gracz = 0
// Komputer = 1
let aktualnyGracz = 0;

let czyMoznaGrac = true;

//Zapisywanie elementów UI
const kosc = document.querySelector('.kosc');

const wynikGracz0 = document.querySelector('#wynik-0');
const wynikGracz1 = document.querySelector('#wynik-1');
const aktualnePunkty0 = document.querySelector('#aktualne-punkty-0');
const aktualnePunkty1 = document.querySelector('#aktualne-punkty-1');
const nazwaGracz0 = document.querySelector('#nazwa-0');
const nazwaGracz1 = document.querySelector('#nazwa-1');
const panelGracz0 = document.querySelector('.gracz-0-panel');
const panelGracz1 = document.querySelector('.gracz-1-panel');

const obrazki = [
    'https://cdn.glitch.com/8fbc579f-3346-47a0-abbc-945a83abb962%2Fkosc-1.png?v=1610038358032',

    'https://cdn.glitch.com/8fbc579f-3346-47a0-abbc-945a83abb962%2Fkosc-2.png?v=1610038358080',

    'https://cdn.glitch.com/8fbc579f-3346-47a0-abbc-945a83abb962%2Fkosc-3.png?v=1610038358032',

    'https://cdn.glitch.com/8fbc579f-3346-47a0-abbc-945a83abb962%2Fkosc-4.png?v=1610038358142',

    'https://cdn.glitch.com/8fbc579f-3346-47a0-abbc-945a83abb962%2Fkosc-5.png?v=1610038358032',

    'https://cdn.glitch.com/8fbc579f-3346-47a0-abbc-945a83abb962%2Fkosc-6.png?v=1610038358193',
];

function nowaGra() {
    czyMoznaGrac = true;
    aktualnyGracz = 0;
    kosc.style.display = 'none';
    punkty = [0, 0];
    punktyRundy = 0;

    wynikGracz0.textContent = '0';
    wynikGracz1.textContent = '0';
    aktualnePunkty0.textContent = '0';
    aktualnePunkty1.textContent = '0';

    nazwaGracz0.textContent = 'Gracz 1';
    nazwaGracz1.textContent = 'Gracz 2';

    panelGracz0.classList.remove('aktywny');
    panelGracz0.classList.add('aktywny');
    panelGracz1.classList.remove('aktywny');
}
