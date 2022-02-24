// operatory porównania
let a = 5,
    b = 6;
// operator równości (sprawdza wartość + robi konwersje)
a == b; // false
// operator nierówności
a != b; // true

// operator identyczności (sprawdza typ + wartość)
a === b; // true
a !== b;

// operator większości, mniejszości

a < b; //true
a > b;

// większe lub równe
a >= b;
a <= b;

if (a == b) {
    // warunek
    // wykonaj kod jeżeli a == b jest prawdą
} else {
    // wykonaj kod jeżeli a == b jest fałszem
}

/*
ZADANIE
Utwórz zmienną wiek, i sprawdź czy dana osoba jest dorosła.
let wiek = prompt('Podaj swój wiek:')
if (wiek < 18) {
  console.log('Jesteś niepełnoletni')
} else {
  console.log('Jesteś pełnoletni')
}
*/

// let wiek = 11;
// // jeżeli osoba ma mniej niż 18, to jest młodzieżą
// // jeżeli osoba ma więcej niż 65, to jest seniorem
// // jeżeli żaden z tych warunków nie odpowiada, to jesteśmy dorosłymi
// if (wiek < 18) {
//     console.log('Młodzież.');
// } else if (wiek > 65) {
//     console.log('Senior.');
// } else {
//     console.log('Dorosła.');
// }
// let wiek = 24,
//     jest_dziewczyna = false;
// if (wiek >= 18 && jest_dziewczyna) {
//     // AND -> służy do ewaluowania czy każdy podwarunek jest prawdą. T && T == T | T && F == F
//     console.log('Dorosła');
// } else if (wiek >= 18 && !jest_dziewczyna) {
//     console.log('Dorosły');
// }
// OR -> służy do ewaluowania czy chociaż jeden podwarunek jest prawdą. T || F == F T || T == T
// F || F == F

/*
ZADANIE
Napisz program który będzie sprawdzać czy możemy kupić daną grę. 
Musimy mieć odpowiednią ilość pieniędzy oraz wiek. Jeśli nie spełnimy któregoś warunku
program powinien zwrócić informację np. Masz wystarczającą ilość lat albo za mało
pieniędzy.
*/
// let pieniądze = prompt('Podaj swóje pieniądze:')
// let wiek = prompt('Podaj swój wiek:')

// if (wiek >= 18 && pieniądze >= 109) {
//     console.log('Możesz kupić');
// }
// else if (wiek >= 18 && pieniądze < 109) {
//   console.log('nie masz pieniędzy :c')
// }
// else if (wiek < 18) {
//   console.log('nie masz dobrego wieku :c')
// }

/*
INSTRUKCJA SWITCH
Ta instrukcja bada wartość pewnej zmiennej i w zależności od wyniku wykonujemy fragment kodu.
*/
let mojaOcena = 3;
// "bardzo dobry"
if (mojaOcena == 5) {
    console.log('bardzo dobry');
} else if (mojaOcena == 4) {
    console.log('dobry');
} else if (mojaOcena == 3) {
    console.log('dostateczny');
} else if (mojaOcena == 2) {
    console.log('dopuszczający');
} else if (mojaOcena == 1) {
    console.log('negatywny');
} else {
    console.log('niepoprawne dane');
}

switch (mojaOcena) {
    case 5:
        console.log('bardzo dobry');
        break;
    case 4:
        console.log('dobry');
        break;
    case 3:
        console.log('dostateczny');
        break;
    case 2:
        console.log('dopuszczający');
        break;
    case 1:
        console.log('negatywny');
        break;
    default:
        console.log('niepoprawne dane');
        break;
}
/*
ZADANIE
W zależności od wyboru gry wypisz w konsoli jej cenę.
Tomb Raider
Minecraft
Fortnite
Total War

>"Tomb Raider"
<"Twoja gra kosztuje 140 złoty."
*/
// let gra = prompt('Wpisz grę którą chcesz kupić.');

// switch (gra) {
//     case 'Minecraft':
//         console.log('Ta gra kosztuje: 109,99zł');
//         break;
//     case 'Tomb Raider':
//         console.log('Ta gra kosztuje: 23,23zł');
//         break;
//     case 'Fortnite':
//         console.log('Ta gra kosztuje: Free to play');
//         break;
//     case 'Total War':
//         console.log('Ta gra kosztuje: 52,48zł');
//         break;
//     case 'Kerbal Space Program':
//         console.log('Ta gra kosztuje: 24,89zł');
//         break;
// }
