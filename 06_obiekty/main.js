// Czym są obiekty?
// Obiekt jest to zbiór danych(cech) oraz akcji(metody), które dany obiekt wykonuje.

/*
SZKLANKA
Cechy/Właściwości/Atrybuty:
Materiał
Pojemność
Kruchość
maUcho

BIURKO
Cechy:
Materiał
Kolor
Wielkość
Ilość Szuflad
Ilość półek

*/

// Kiedy my tworzymy obiekt, my tworzymy specyficznie dany obiekt.
//np. Nie opisujemy wszystkich biurek, tylko biurkoTomka, szklakaPawła

let komputerTomka = {
    //klucz: wartość,
    kartaGraficzna: '1080 Ti',
    procesor: 'i7',
    pamiecRam: 16,
};

/*
ZADANIE
Utwórz obiekt, i nadaj mu z 5 właściwości
let mojTelefon = {
  
  pamienc: '256gb',
  kolor: 'czarny' ,
  model: 'iphone 8',
  aparat: 'aparat szerokątny - 28mm' ,
  zabezpieczenia: 'touch ID , kod',
};
*/

/*
Czym są metody?
Metody są to akcje, które dany obiekt może wykonywać np. pies szczeka, kot miauczy.
Ale również są to akcje, które przeprowadzamy na danym obiekcie. np. umyj futro

Biurko
- podnieś
- obniż
- otwórz szufladę 
*/

let biurkoRomka = {
    //właściwości
    //klucz: wartość
    szuflada: [],
    wysokosc: 1.2,

    //metody
    sprawdzSzuflade: function () {
        //this
        console.log('W szufladzie znajduje się:');
        console.log(this.szuflada);
    },
    wlozDoSzuflady: function (przedmiot) {
        this.szuflada.push(przedmiot);
        console.log(`${przedmiot} został dodany.`);
    },
    wyjmijZSzuflady: function (indeksElementu) {
        let dlugosc = this.szuflada.length;
        if (indeksElementu >= dlugosc) {
            console.log('Tego elementu nie ma w tej tablicy.');
        } else {
            console.log(`Wyciągnąłeś ${this.szuflada[indeksElementu]}`);
            return this.szuflada.splice(indeksElementu, 1)[0];
        }
        return ' ';
    },
};

biurkoRomka.sprawdzSzuflade();
biurkoRomka.wlozDoSzuflady('telefon');
biurkoRomka.sprawdzSzuflade();
biurkoRomka.wlozDoSzuflady('piórnik');
biurkoRomka.sprawdzSzuflade();
biurkoRomka.wlozDoSzuflady('książka');
biurkoRomka.sprawdzSzuflade();

wyciagnietyPrzedmiot = biurkoRomka.wyjmijZSzuflady(2);
console.log(wyciagnietyPrzedmiot);
