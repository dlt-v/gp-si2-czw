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
const pGracz = document.querySelector('#pGracz');
const pKomputer = document.querySelector('#pKomputer');

przyciskOk.addEventListener('click', sprawdzLitere);
przyciskReset.addEventListener('click', zresetuj);

// zmienne globalne
let wyraz = '';
let odgadnieteLitery = [];
let uzyteLitery = [];
let zycia = tabObrazki.length - 1; // 11
let gracz = 0;
let komputer = 0;
pGracz.innerHTML = gracz;
pKomputer.innerHTML = komputer;

function naStart() {
    // wylosuj słowo z tablicy wyrazy
    wyraz = wyrazy[Math.floor(Math.random() * wyrazy.length)];
    wydrukujWyraz();
}

function wydrukujWyraz() {
    gra.innerHTML = '';
    let wygrana = true;
    for (let i = 0; i < wyraz.length; i++) {
        // Jeżeli w odganietych literach znajduje się litera to ją wydrukuj.
        if (odgadnieteLitery.includes(wyraz[i])) {
            gra.innerHTML += wyraz[i];
        } else {
            gra.innerHTML += '_';
            wygrana = false;
        }
    }
    return wygrana;
}

function sprawdzLitere() {
    let litera = input.value.toLowerCase();
    input.value = '';

    if (!litera) {
        // console.log('Input jest pusty!');
        komunikat.innerHTML = 'Nie możesz podać pustego pola.';
        return;
    }

    // Sprawdź czy ta litera została już użyta
    if (uzyteLitery.includes(litera)) {
        komunikat.innerHTML = `Litera "${litera}" została już użyta.`;
        return;
    } else {
        uzyteLitery.push(litera);
    }

    // Sprawdź czy litera występuje w wylosowanym wyrazie
    komunikat.innerHTML = '';
    if (wyraz.includes(litera)) {
        odgadnieteLitery.push(litera);
    } else {
        // Litera jest niepoprawna

        zycia -= 1;
        console.log(`Życia: ${zycia}`);

        obrazek.style.display = 'block';
        if (zycia < 0) {
            //użytkownik przegrał
            komunikat.innerHTML = `Przegrałeś! Poprawne hasło to ${wyraz}.\nNaciśnij "reset", by zacząć od nowa.`; // \n - new line
            przyciskOk.disabled = true;
            przyciskOk.style.backgroundColor = '#6c6c6c';
            komputer += 1;
            pKomputer.innerHTML = komputer;
        } else {
            obrazek.src = tabObrazki[zycia];
        }
    }
    if (wydrukujWyraz()) {
        komunikat.innerHTML = 'Brawo, wygrałeś!';
        gracz += 1;
        pGracz.innerHTML = gracz;
    }

    // SINGLE SOURCE OF TRUTH
    // Rozwiązanie Emila
    // if (gra.innerHTML == wyraz) {
    //     komunikat.innerHTML = 'Brawo, wygrałeś!';
    // }
}

function zresetuj() {
    przyciskOk.disabled = false;
    przyciskOk.style.backgroundColor = '#fa4a0a';
    obrazek.style.display = 'none';
    console.log('Reset gry.');
    // DRY - Don't Repeat Yourself - Nie powtarzaj się
    odgadnieteLitery = [];
    uzyteLitery = [];
    zycia = tabObrazki.length - 1;

    naStart();
    komunikat.innerHTML = 'Zresetowano grę.';
    input.value = '';
}

naStart();

/*
Zadanie:
Dodaj punkty gracza i komputera:
gracz dostaje punkt gdy zgadnie wyraz
koputer dostaje punkty gdy gracz przegra

punkty są wyświetlane w dowolnym miejscu na strone.
*/
/*
Życia:
za każdym razem gdy nowo wprowadzona litera nie znajduje się w wyrazie to odejmujemy 1 życie.
Kiedy życie zostanie odjęte, zastępujemy lub dodajemy obrazek odpowiadający ilościom żyć.

Kiedy życia dobiegną końca to zablokujemy graczowi możliwość grania dalej 

oraz poinformujemy użytkownika że przegrał.

Możliwość wyświetlenia innego specjalnego obrazka.
*/

/*
Przycisk reset
Po naciśnięciu powinien:
- zresetuj wyraz do losowania - wylosuj nowy
- wyczyść wyświetlany napis
- wyczyść input
*/
