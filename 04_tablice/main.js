function wypij(poziomSzklanki) {
    if (poziomSzklanki == 0) {
        console.log('Szklanka jest już pusta.');
        return poziomSzklanki;
    } else {
        return poziomSzklanki - 1 / 4;
    }
}
function nalej() {
    return 1;
}
/*
ZADANIE
Stwórz funkcję która będzie wyliczać jaki powinniśmy zostawić napiwek kelnerowi w
restauracji w zależności od kwoty zamówienia. Przyjmij że wydając mniej niż 100zł
napiwek wynosi 10% od całości, wydając między 100zł a 250zł napiwek wynosi 7% = 0.07,
powyżej 250zł napiwek wynosi 4% = 0.04  .

function napiwek(zamowienie){
  if (zamowienie < 100){
    let kwota = zamowienie * 0.10
    console.log(`Napiwek wynosi ${kwota}zł`)
  }
  else if (zamowienie >= 100 & zamowienie < 250){
    let kwota = zamowienie * 0.07
    console.log(`Napiwek wynosi ${kwota}zł`)
  }
  else if (zamowienie > 250){
    let kwota = zamowienie * 0.04
    console.log(`Napiwek wynosi ${kwota}zł`)
  }
  else{
    console.log('Nieprawidłowe dane')
  }
}
*/

// mojaSzklanka = 0; // 0 - szklanka pusta - 0 - 0%
// mojaSzklanka = nalej(); // szklanka pełna - 1 - 100%

// mojaSzklanka = wypij(mojaSzklanka); // 75%
// console.log(mojaSzklanka);

// mojaSzklanka = wypij(mojaSzklanka); // 50%
// mojaSzklanka = wypij(mojaSzklanka); // 25%
// mojaSzklanka = wypij(mojaSzklanka); // 0%
// mojaSzklanka = wypij(mojaSzklanka); // -25% !!!
// console.log(mojaSzklanka);

// TABLICE
/*
Przykłady tablic/list:
1. Lista zakupów
2. Plan lekcji
3. Lista obecności
4. Menadżer zadań

Definicja - jest to kolekcja wartości które są ponumorowane i każdy ma swoją pozycję.

Kolejka w sklepie
*/
// let pustaTablica = []; // Tworzenie pustej tablicy.
// //let tablica1 = Array();
// let wypelonionaTablica = ['Pies', 'Kot'];

// console.log(pustaTablica);
// pustaTablica.push('Ryba'); // Dodawanie elementu 'Ryba' do końca tablicy.
// console.log(pustaTablica);
// pustaTablica.push('Gitara'); // Dodawanie elementu 'Gitara' do końca tablicy.
// console.log(pustaTablica);

// console.log(pustaTablica[1]); // Pozyskiwanie pojedynczego elementu z tablicy.

// pustaTablica.push(17); // Do tablicy można dodać elementy różnego typu, ale nie jest to zalecane.
// console.log(pustaTablica);

// pustaTablica.pop(); // domyślnie usuwamy element z końca tablicy

// pustaTablica.unshift('Uczeń'); // dodaje elemnt na początku tablicy
// console.log(pustaTablica);
// pustaTablica.shift(); // usuwa element z początku tablicy
// console.log(pustaTablica);

/*
    Zadanie
    Utwórz tablicę z minimum 7 elementami o dowolnej tematyce.
    Np. lista zakupów.
*/

// let listaZakopow = [
//     'Jabłko',
//     'Banan',
//     'Konserwa',
//     'Woda',
//     'Gitara',
//     'Mąka',
//     'Ryż',
// ];

// console.log(listaZakopow.join(' - ')); // domyślnie łączy tablice przecinkami
// console.log('Ala ma kota'.split(' ')); // zamieniamy na tablice, domyślnie element jako cały string

// console.log(listaZakopow.reverse()); // odwracamy kolejność elementów

/*
ZADANIE
Utwórz funkcję która będzię sprawdzała czy argument jest PALINDROMEM.
Palindrom - wyrażenie brzmiące tak samo czytane z lewej i od prawej strony.
Np.
Ala
oko
potop
Funkcja zwraca true or false w zależności od wyniku.
*/
function isPalindrom(slowo) {
    slowo = [...slowo];
    if (slowo.join() == slowo.reverse().join()) {
        return true;
    }
    return false;
}
console.log(isPalindrom('apk'));
// console.log([...'Ala ma kota']); // rozdzielamy napis na pojedyncze literki
/*
ZADANIE DOMOWE

Napisz program, który będzie przeliczać punkty zdobyte na maturze według
kryteriów dla kierunku informatyka.
Kryteria
1% = 1 punkt. Wynik pkt zdobyty na maturze z matematyki poziom podstawowy
1% = 1.5 punkt. wynik zdobyty na maturze z matematyki poziom rozszerzony
Stwórz tablicę w której zapiszesz liczbę zdobytych pkt z matury oraz wskażesz jej
poziom
> 40 (p)
> 30 (r)
40 * 1 = 40
30 * 1.5 = 45
95 
*/
