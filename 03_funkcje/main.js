//Deklaracja funkcji
function przywitaj(/* argumenty, parametry */) {
    console.log('Cześć');
}
//Przywołanie funkcji
// przywitaj(/* argumenty, parametry */);

function suma(liczbaA, liczbaB) {
    console.log(`${liczbaA} + ${liczbaB} = ${liczbaA + liczbaB}`);
}
//undefined = nie zdefiniowany
//NaN = Not a Number -> nie liczba
let a = 4;
let b = 6;
// suma(3, 5);
// suma(a, b, 5);

function podziel(liczbaA, liczbaB = 2) {
    console.log(`${liczbaA} / ${liczbaB} = ${liczbaA / liczbaB}`);
    'ala' + ' ' + ' ma kota'; // 'ala ma kota' // konkatenacja
}
// podziel(6, 3);
// podziel(6);

/*
Zadanie:
Utwórz funkcję, która w zależności od podania do niej wieku, mówi nam, czy jesteśmy pełnoletni, czy nie.
Pełnoletni >= 18
Młodociany < 18

function pelnoletnosc(wiek) {
  if (wiek >= 18) {
    console.log('Pełnoletni')
  }
  else if (wiek < 18) {
    console.log('Niepełnoletni')
  }
  else {
    console.log('Złe dane')
  }
}
let lata = Number(prompt('Ile masz lat?'))
pelnoletnosc(lata)
*/

/*
Zadanie 2:
Utwórz funkcję, która otrzymuje rok urodzenia i  oblicza ile nam zostało do emerytury.
Emerytura w wieku 60 lat.

Zadanie 2a:
W zależności od płci (otrzywana jako drugi parametr), podaj emerytuę:
K: 60 lat.
M: 65 lat.


function emerytura(wiek, plec) {
  if (plec == `K`) {
    console.log(`Zostało ci do emerytury ${60 - wiek} lat`)
  }
  else if (plec == `M`) {
    console.log(`Zostało ci do emerytury ${65 - wiek} lat`)
  }
  else {
    console.log("Złe dane")
  }
}
let lata = Number(prompt("Podaj swój wiek:"))
let KM = prompt("Podaj swoją płeć (K/M)")
emerytura(lata, KM)
*/

// Funkcja która przyjmuje rok urodzenia i zwraca poprawny wiek
// let lata = Number(prompt('Podaj swój wiek:'));

function podajWiek(rok) {
    let wiek = 2022 - rok;
    return wiek;
}

// let mojeLata = rokUrodzenia(1999);
// console.log(mojeLata);

let rok = 1999;
let plec = 'K';
// emerytura(rok, plec);

function emerytura(rok, plec) {
    if (plec == `K`) {
        console.log(`Zostało ci do emerytury ${60 - podajWiek(rok)} lat`);
    } else if (plec == `M`) {
        console.log(`Zostało ci do emerytury ${65 - podajWiek(rok)} lat`);
    } else {
        console.log('Złe dane');
    }
}

/*
Napisz funkcję, która wita nas inaczej w zależności od wieku. Użyj drugiej funkcji do wydrukowania/wylogowania gotowego wyniku do konsoli.
powitaj(wiek) -> string
drukuj(tekst) -> None

function powitanie(wiek) {
  if (2022-wiek >= 13) {
    return 'Dobry dzień'
  }
  else if (2022-wiek < 13) {
    return 'Witaj'
  }
  else {
    return 'Złe dane'
  }
}
let lata = Number(prompt('w jakim roku się urodziłeś'))
let tekst = powitanie(lata)
function drukuj(/*argument*\/tekst) {
    console.log(tekst)
}
*/

let napis = 'Giganci Programowania';
console.log(napis.toUpperCase());
console.log(napis.toLowerCase());
console.log(napis[2]);
console.log(napis.charAt(2));
console.log(napis.startsWith('Giganci'));
console.log(napis.endsWith('Programowania'));

// napis = '   Giganci Programowania         ';
console.log(napis.trim());
console.log(napis.replace('Programowania', 'Gotowania'));
console.log(napis.replace('a', '#'));

const WZORZEC = /[%]/g;
console.log(napis.replace(/[a]/g, '#'));

let kod = '#l#3ma3k8t#';
console.log(kod);

kod = kod.replace(/[3]/g, ' ').replace(/[8]/g, 'o').replace(/[#]/g, 'a');
console.log(kod);

/*
PRACA DOMOWA
Napisz funkcję, która rozszyfruje nam wiadomość.
/*

const zakodowanyCytat=' +#wsz%||wyd#j%||się*||że||coś||j%st||ni%możli
w%*||dopóki||ni% +ost#ni%||to||+robion%'

/* 
a to #
e to %
' ' to ||
z to +
, to * 
*/
