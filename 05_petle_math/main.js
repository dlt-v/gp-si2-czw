// Pętle, wykonuj jakiś fragment kodu pod prawdziwym warunkiem.
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// for(iterator, warunek, operacje) {
//     ciało fora
// }
// for (let i = 9; i >= 0; i--) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i += 2) {
//     setTimeout(function () {
//         console.log(i);
//     }, 3000);
// }
/*
Zadanie:
Stwórz odliczanie od 10. Wykorzystaj pętle for,alert() oraz instrukcje warunkową if
dla 0 powinno zostać wyświetlone ‘Start!!!’.
*/
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
//     if (i == 0) {
//         console.log('Start!');
//     }
// }
//INSTRUKCJE BREAK I CONTINUE

// console.log('Koniec pętli.');
//Break - instrukcja która po wywołaniu wychodzi nam z pętli.
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
// }
//Continue - instrukcja, która po wywołaniu bezpośrednio przechodzi do kolejnej iteracji.
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) continue;
//     console.log(`To jest nasza ${i} iteracja.`);
// }
// console.log('Koniec pętli.');
// 3 / 2 = 1 część całkowita, 1 reszty
// 9 / 4 = 2 c 1 r
// console.log(5 / 3); // dzielenie "normalne"
// console.log(5 % 3); // dzielenie modulo aka reszta
// console.log(Math.floor(5 / 3)); // dzielenie całkowite

// Math
let a = 5.46464763474;
// console.log(a.toPrecision(5));
let b = ['a', 5, 3];
// console.log(Math.random());
// wylosuj liczbę całkowitą od 0 do 5
// let losowaLiczba = Math.random() * 5;
// console.log(losowaLiczba);
// console.log(Math.ceil(losowaLiczba));
// console.log(Math.floor(losowaLiczba));
// console.log(Math.round(losowaLiczba));
/*
Zadanie
Za pomocą pętli for uzupełnij tablicę 50 losowymi liczbami całkowitymi z zakresu od 0 do 100.
I wylogować za pomocą console.log() w osobnych linijkach.
*/
let tablica = [];
for (let i = 49; i >= 0; i--) {
    tablica.push(Math.round(Math.random() * 100));
}

// WHILE
// for(iterator, warunek, operacje) {
//     ciało fora
// }

//while (warunek) {
//     ciało while
// }

// let i = 0;
// while (i < 10) {
//     i++;
//     if (i < 5) {
//         continue;
//     }
//     console.log(i);
// }
/*
Stwórz program do odgadywania losowej liczby z danego przedziału. Jeśli podasz
np. liczbę mniejszą od wylosowanej dostaniesz tekst podpowiedzi.
*/

let losowaLiczba = Math.round(Math.random() * 50);
while (true) {
    let zgadywanaLiczba = Number(prompt('Zgadnij liczbę: '));
    if (zgadywanaLiczba < losowaLiczba) {
        console.log('Liczba za mała');
    } else if (zgadywanaLiczba > losowaLiczba) {
        console.log('Za duża');
    } else {
        console.log('Brawo!');
        break;
    }
}
