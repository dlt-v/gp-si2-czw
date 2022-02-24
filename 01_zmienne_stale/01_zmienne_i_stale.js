// var nazwa = 2345;

// let zmiennaLet = 'Ania ma';
// const stalaConst = 'Kota';

// // komentarz

// // typy prymitywne

// // liczba calkowita
// let calkowita = 234;
// //liczba zmiennoprzecinkowa
// let zmiennoprzecinkowa = 234.34;
// let gotowka = 13.5;
// let zlotowki = 13;
// let grosze = 50;

// // tekst
// let tekst = 'Ala ma kota';
// let teskt1 = 'Ala ma kota';
// let tekst2 = `Ala ma kota`;
// //bool  (prawda/falsz)
// let prawda = true;
// let falsz = false;

// /* Komentarz
// wieloliniowy
// */

// let imie = prompt('Podaj swoje imię:');
// let nazwisko = prompt('Podaj swoje nazwisko:');

// console.log(imie + ' ' + nazwisko);

// let a = 15;
// let b = 10;

// console.log(a + b); //dodawanie
// console.log(a - b); //odejmowanie
// console.log(a / b); //dzielenie
// console.log(a * b); //mnożenie
// console.log(a % b); //reszta z dzielenia (modulo)

// console.log(a++); //inkrementacja - zwiekszenie wartosci o 1
// console.log(a--); //dekrementacja - zmniejsza wartosci o 1

// let inputJakoLiczba = Number(prompt('Podaj swój wiek:'));

/*BMI (Body Mass Index) daje każdemu możliwość szybkiego i wygodnego obliczenia
własnego wskaźnika masy ciała. BMI obliczamy dzieląc masę ciała (w kilogramach)
przez wzrost do kwadratu (w metrach). Wskaźnik ten wykorzystywany jest przede
wszystkim do oceny ryzyka pojawienia się groźnych chorób: miażdżycy, choroby
niedokrwiennej serca, udaru mózgu, czy nawet nowotworów.

Należy pobrać od użytkownika masę podaną w kg za pomocą funkcji prompt(),
analogicznie ze wzrostem, całość wyliczamy ze wzoru BMI=masa/(wzrost*wzrost),
i na koniec logujemy tą wartość w konsoli za pomocą console.log()
*/
// let kg = Number(prompt("Podaj swoją wage:"));
// let cm = Number(prompt("Podaj swój wzrost:"));
// console.log(kg / (cm * cm));

let a = 15;
let b = 10;

a = a + b;
// a += b; // operacja bezpośrednia dodawnia
// console.log(a);
// a = a - b;
a -= b;

// a = a / b;
a /= b;

//sposoby nazywania zmiennych
/*
camelCase - JS, i inne popularne języka
snake_case - Python
PascalCase - Pascal
dodatkowo najlepiej zapisywać nazwy opisowo
najczęściej nie zapisujemy zmiennych w języku polskim
nie używamy znaków specjalnych, np óęüö
*/
console.log('hello world!');
console.log(readline());
