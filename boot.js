/*Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

// sezione dell' elemento contenitore e pulsante
const gridElement = document.getElementById("grid");
const startButton = document.getElementById("startButton");

for (let i = 1; i <= 64; i++) {
    const newElement = createMyElement("div", "square");

    // Aggiungi il numero come testo all'interno del div
    newElement.textContent = i;

    newElement.addEventListener("click",
        function () {
            this.classList.add("clicked");
        }
    );

    gridElement.append(newElement);
}

startButton.addEventListener("click",
    function () {
    // Aggiungi qui la logica di inizio del gioco
    alert("Il gioco è iniziato!");
    }
);

// definizione funzione 
function createMyElement(tagtype, classname) {
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);
    return currentElement;
}









