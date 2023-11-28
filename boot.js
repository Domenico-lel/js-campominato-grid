/*Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

// sezione dell' elemento contenitore
const gridElement = document.getElementById("grid");

for (let i = 0; i < 64; i++){

    const newElement = createMyElement("div", "square");

    newElement.addEventListner("click",
    
        function () {
            newElement.classList.add("clicked");
        }
    );
    
    gridElement.append(newElement);
    
}


// definizione funzione 
function createMyElement(tagtype, classname) {
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
}









