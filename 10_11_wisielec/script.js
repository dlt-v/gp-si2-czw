const tabObrazki = [
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F0.png?v=1623760735527',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F1.png?v=1623760735604',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F2.png?v=1623760735890',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F3.png?v=1623760735703',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F4.png?v=1623760735867',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F5.png?v=1623760735857',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F6.png?v=1623760735876',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F7.png?v=1623760735751',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F8.png?v=1623760735918',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F9.png?v=1623760735966',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F10.png?v=1623760735998',
];

const wyrazy = ['giganci', 'wisielec', 'program'];

const gra = document.querySelector('#gra');
const input = document.querySelector('#litera');
const przyciskOk = document.querySelector('#przycisk-ok');
const przyciskReset = document.querySelector('#przycisk-reset');
const obrazek = document.querySelector('img');
const komunikat = document.querySelector('#komunikat');

przyciskOk.addEventListener('click', sprawdzLitere);

// zmienne globalne
let wyraz = '';

function naStart() {
    // wylosuj słowo z tablicy wyrazy
    wyraz = wyrazy[Math.floor(Math.random() * wyrazy.length)];
    wydrukujWyraz();
}

function wydrukujWyraz() {
    for (let i = 0; i < wyraz.length; i++) {
        gra.innerHTML += '_';
    }
}

function sprawdzLitere() {
    let litera = input.value.toLowerCase();

    if (!litera) {
        console.log('Input jest pusty!');
        komunikat.innerHTML = 'Nie możesz podać pustego pola.';
        return;
    }

    // Sprawdź czy litera występuje w wylosowanym wyrazie
    if (litera in wyraz) {
        console.log('Litera występuje w wyrazie.');
    }
    komunikat.innerHTML = '';
    console.log(litera);
}

naStart();
