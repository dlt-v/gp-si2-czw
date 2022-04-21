// przycisk
const button = document.querySelector('#przyciskDodaj');
// przycisk do drukowania
const printButton = document.querySelector('#przyciskDrukuj');
// pole na wartość
const input = document.querySelector('#wartosc');
// lista zadań
const list = document.querySelector('#listaZadan');
// komunikat błędu
const notification = document.querySelector('#komunikat');

// zdarzenia
button.addEventListener('click', addToShoppingList);
list.addEventListener('click', deleteFromShoppingList);
// funkcje zdarzenia
function addToShoppingList() {
    let wartosc = input.value.trim();

    if (wartosc.length == 0) {
        //jeżeli wartość jest pusta
        notification.textContent = 'Proszę uzupełnij pole.';
    } else {
        //jeżeli wartość jest poprawna
        console.log(wartosc);
        list.innerHTML += `<li>${wartosc}</li>`;
        input.value = '';
        notification.textContent = '';
    }
}
function deleteFromShoppingList(event) {
    list.removeChild(event.target);
}
