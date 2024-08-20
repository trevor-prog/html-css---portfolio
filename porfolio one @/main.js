const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent)

const phrases=["IT specialist...", "Programer...", "artist", "Boy", "Human Being", "19 years old", "taking a degre in information communication technology"]
let phraseindex =0
let letterindex = 0;
const typingSpeed = 150
const erassingSpeed = 75

function printletters(phrase) {
    
    if(letterindex == phrase.length){
        //clear the typed letters
        clearLetters()
    }
   else if (letterindex < phrase.length) {
       dynamicContent.textContent += phrase.charAt(letterindex)
   //letterindex = letterindex + 1
   letterindex += 1
    setTimeout(function() {
        printletters(phrase)
    }, typingSpeed)
 }
   
}

function clearLetters() {
    if (letterindex == -1) {
        phraseindex =(phraseindex +1)% phrases.length
        letterindex = 0
        printletters(phrases[phraseindex])
    }
     else if(letterindex > -1){
        let updatedPrase = ""
        for (let index = 0; index < letterindex ; index++) {
            updatedPrase += phrases[phraseindex].charAt(index)  
        }
        console.log(updatedPrase);
        dynamicContent.textContent = updatedPrase
        letterindex -= 1
        setTimeout(clearLetters, erassingSpeed);
    }
}

printletters(phrases[phraseindex])
