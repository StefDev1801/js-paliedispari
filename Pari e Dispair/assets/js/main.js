//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri 
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

let pariODispari = prompt('scegli se pari o dispari - specificando la parola')
let userNumber = Number(prompt('inserisci un numero da sommare'));

function getRndInteger(min, max) { //presa da w3school
    return Math.floor(Math.random() * (max - min) ) + min;
}
const getRndInteger1to100 = getRndInteger(1,100)
console.log(getRndInteger1to100);
const userAndComputerNumber = userNumber + getRndInteger1to100

console.log('the sum is '+userAndComputerNumber);



function checkOddsPairWithComputer() {

    // console.log(userAndComputerNumber);
    if ((userAndComputerNumber %2 == 0 && pariODispari == 'pari') || (userAndComputerNumber %2 == 1 && pariODispari == 'dispari')) {
        alert('hai vinto')

    }else{
        console.log('hai perso (potresti aver sbagliato a scrivere pari o dispari)');
    }
    // Dichiariamo chi ha vinto.
}
checkOddsPairWithComputer();