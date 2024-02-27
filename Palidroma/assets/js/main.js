//console.log('ou');
//- Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

const userWord = 'bob'
console.log(userWord);
let firsLetter;
let lastLetter;
const parolaDritta = []
const parolaRovescio = []
let palindromeCounter = 0;


    for (let index = 0; index < userWord.length; index++) {
        firsLetter = userWord[index];
        // console.log(firsLetter);
        parolaDritta.push(firsLetter)
        
    }
    for (let index = userWord.length-1; index >= 0 ; index--) {
            lastLetter = userWord[index];
            parolaRovescio.push(lastLetter)
            // console.log(lastLetter);
        }
    console.log(parolaDritta);
    console.log(parolaRovescio);
    if (parolaDritta === parolaRovescio) {
        console.log('la tua parola è palindroma');
    }else{
        console.log('la tua parola non è palindroma');
    }
/*if (palindromeCounter == userWord.length) {
    console.log('The word IS palindrome');
}else{
    console.log('The word IS NOT palindrome');
}*/
    
//questo array dovrò vedere quanto è lungo (es 4)
//faccio lunghezza tot e lo confronto con 0, tot -1, tot-2
//es 0 to 4, 1 to 4-1=3, 2 to 4-2 con if 2 = 4-2 breack. NUMERO PARI
//es con 5: 0 to 5, 1 to 5-1=4, 2 to 5-2=3, 3 to 5-3=2
// Check firt letter, if it's