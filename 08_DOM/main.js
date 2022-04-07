// Czym jest DOM?

// Odwoływanie się do elementów

// let firstParagraph = document.querySelector('p');
// let secondParagraph = document.querySelector('.para-class');
// let thirdParagraph = document.querySelector('#para-id');

// let allParagraphs = document.querySelectorAll('p');

// console.log(firstParagraph);
// console.log(secondParagraph);
// console.log(thirdParagraph);

// console.log(allParagraphs);

// let idP = document.getElementById('para-id');
// console.log(idP);

// let idC = document.getElementsByClassName('para-classs');
// console.log(idC);

let paragraph = document.querySelector('p');
//innerText, innerHTML, textContent

//Zamień w P tylko napis a zostaw obrazek.
paragraph.innerHTML = paragraph.innerHTML.replace(
    paragraph.innerText,
    'Ala ma kota.'
);
paragraph.innerHTML += 'Asia ma psa.';

/*
Do tego paragrafu dodaj tekst pod obrazkiem. "Asia ma psa."
*/

// Obserwatory/nasłuchiwacze zdarzeń / Event Listeners
let button = document.querySelector('button');
button.addEventListener('click', onButtonPress);

function onButtonPress() {
    console.log('Kliknięto przycisk.');
}

/*
Wygeneruj twa przyciski i dopisz do nich funkcje, które będą logowały wasze imię i wiek.
*/

// Zdarzenia
// https://www.w3schools.com/jsref/dom_obj_event.asp
// Zmienianie styli
// button.style.backgroundColor = 'green';
button.style.border = '2px solid red';
button.style.borderRadius = '20px';
// https://www.w3schools.com/jsref/dom_obj_style.asp
