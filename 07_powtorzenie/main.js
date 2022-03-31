// ZADANIE 1 17:10

// Stwórz program, który będzie obliczać ile będziesz mógł ściągnąć danych z
// Internetu w ciągu godziny, podając jedynie prędkość swojego Internetu w
// Megabitach na sekundę .

// 1. Pobierz od użytkownika prędkość Internetu w Mb/s(Megabity na sekundę) i
// zapisz do zmiennej. Skorzystaj z metody prompt() oraz podany przez
// użytkownika ciąg znaków przekształć na liczbę, użyj Number()
// let predkosc = Number(prompt('Podaj prędkość swojego internetu w Mb/s.'));
// let predkosc = 600;
// // 2. Utwórz zmienną czas w której zapiszesz 1 godzinę przekonwertowaną na
// // sekundy
// let czas = 3600; // 1 * 60 * 60
// // 3. zamieniamy jednostkę danych z megabitów na megabajty na sekundę
// // pamiętając że 1 bajt [B] to 8 bitów [b]
// predkosc /= 8;
// // 4. mnożymy przepustowość Internetu przez czas i dzielimy przez 1024 żeby
// // uzyskać jednostkę GB całość obliczeń zapisujemy do zmiennej np. wynik
// let wynik = (predkosc * czas) / 1024;
// // 5. wyświetlamy wynik za pomocą alert()
// console.log(`W ciągu godziny jesteś w stanie pobrać ${wynik.toFixed(2)} GB.`);
// Możemy pokazać metodę toFixed(), w której możemy określić wyświetlaną liczbę
// miejsc po przecinku.

//ZADANIE 2 17:35

// Stwórz program, który sprawdzi czy podany przez użytkownika rok jest rokiem
// przestępnym. Skorzystaj z instrukcji warunkowej if
// Rok przestępny jest rokiem mającym 366 dni zamiast 365. Co 4 lata w lutym dodaje
// się jeden dodatkowy dzień.

// Warunki:

// Rok jest przestępny, gdy jest podzielny przez 4 i nie jest podzielny przez 100 lub
// jest podzielny przez 400
// Wykorzystaj operator modulo-% aby sprawdzić resztę z dzielenia. Jeśli jakaś
// wartość jest podzielna to znaczy że dzieli się bez reszty.

// let rok = 2000;
// if ((rok % 4 == 0 && rok % 100 != 0) || rok % 400 == 0) {
//     console.log(`Rok ${rok} jest przestępny`);
// } else {
//     console.log(`Rok ${rok} nie jest przestępny`);
// }

// ZADANIE 3 Do 17:50

// Stwórz funkcje poleProstokata(), która będzie przyjmować dwa argumenty długość
// boku1 oraz długość boku2 w celu policzenia i zwrócenia pola powierzchni (return).
// function poleProstokata(a, b) {
//     return a * b;
// }
// // const poleProstokata = (a, b) => a * b;

// function poleTrojkata(p, h) {
//     return (p * h) / 2;
// }
// const PI = 3.14;
// function poleKola(r) {
//     return PI * Math.pow(r, 2);
// }

// DOD. Dodaj funkcje poleTrojkota(p, h), poleKola(r) (PI 3.14)

// Zadanie 4 DO 18:10

// Stwórz funkcje losowyKolor(), która będzie generować losowe kolory w zapisie
// szesnastkowym. Wszystkie dostępne znaki umieść w tablicy.
// Znaki budujące kolor 0123456789abcdef w sumie 16

// 1. Stwórz zmienna do której zapiszesz wszystkie znaki

// 2. Zapisz każdy znak jako osobny element do tablicy używając Spread syntax
// … , to zapis, który umożliwia rozbijanie iterowanej wartości na składowe.

// 3. Utwórz zmienna kolor w której zapiszesz znak stały #

// 4. Wykorzystaj pętle for do stworzenia koloru

// 5. Zwróć gotowy kolor z funkcji

function losowyKolor() {
    let znaki = '0123456789abcdef';
    // console.log(znaki);
    let pojedynczeZnaki = [...znaki];
    // console.log(pojedynczeZnaki);
    let kolor = '#';

    for (let i = 0; i < 6; i++) {
        kolor +=
            pojedynczeZnaki[Math.floor(Math.random() * pojedynczeZnaki.length)];
    }
    return kolor;
}
console.log(losowyKolor());
// Zadanie 5 - Praca domowa
// Stwórz obiekt nowyUzytkownik.
// Ustaw w nim takie właściwości jak login, email, telefon, haslo oraz metodę
// generujHaslo() która będzie tworzyć nowe hasło.
// Wygeneruj nowe hasło dla użytkownika
