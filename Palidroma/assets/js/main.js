//console.log('ou');
//- Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
/** 


console.log(userWord.split(''));
const splitWord = userWord.split('')
console.log(splitWord.reverse());//array rovesciato
const reverserWOrdArray = splitWord.reverse()

const reverserWOrd = reverserWOrdArray.join('')

**
 * check if a given word is a palindrom
 * @param {string} userWord The word to ccheck
 * @return {string}
 *
function isPalindrom(userWord) {
    const reverserWOrd = userWord.split('').reverse().join('')

    if (reverserWOrd == userWord) {
        return true
    }
    return false
}


if (isPalindrom(userWord2)) {
    console.log('is a palindrom');
    
}

*/



//FUNCTION TO REVERSE ARRAY












const userWord = prompt('inserisci una parola ti dirò se è palindroma')



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


    //FUNCTION ADDED WITH THE HELP OF FABIO
    function joinArrayAsString(arrayMadeOfOneWordSplitted) {
        let joinWord = ''
        for (let index = 0; index < arrayMadeOfOneWordSplitted.length; index++) {
            let letter = arrayMadeOfOneWordSplitted[index];
            joinWord += letter
            
        }
        return joinWord;
    }

    
    console.log(joinArrayAsString(parolaDritta));
    console.log(joinArrayAsString(parolaRovescio));
    

if (joinArrayAsString(parolaDritta) == joinArrayAsString(parolaRovescio)) {
    console.log('The word IS palindrome');
}else{
    console.log('The word IS NOT palindrome');
}

 

/**/
    
//questo array dovrò vedere quanto è lungo (es 4)
//faccio lunghezza tot e lo confronto con 0, tot -1, tot-2
//es 0 to 4, 1 to 4-1=3, 2 to 4-2 con if 2 = 4-2 breack. NUMERO PARI
//es con 5: 0 to 5, 1 to 5-1=4, 2 to 5-2=3, 3 to 5-3=2
// Check firt letter, if it's