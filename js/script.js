function getNewSquare (){
    const newSquareElement = document.createElement('article');
    newSquareElement.classList.add('items-square');

    return newSquareElement
}

let numeriUnici = generaNumeriCasualiUnici(1, 100, 10);
console.log(numeriUnici);


const mainContentEl = document.querySelector('main section.main-content');

    const reset = document.querySelector("section.main-content");
    reset.innerHTML = "";
    

    for (let i = 1; i <= 100; i ++){
    const currentSquare = getNewSquare();
    numeriUnici = generaNumeriCasualiUnici(1, 100, 10);
    const squareContent = i;
    currentSquare.innerHTML += `<span> ${squareContent}</span>`
    currentSquare.classList.toggle('clicked')
    

    currentSquare.addEventListener('click', function(){
        currentSquare.classList.toggle('clicked');
        console.log(squareContent)
    });

    mainContentEl.appendChild(currentSquare);
    
}


const buttonElement = document.querySelector('button');


buttonElement.addEventListener('click' , function(){
    const mainContentEl = document.querySelector('main section.main-content');

    const reset = document.querySelector("section.main-content");
    reset.innerHTML = "";
    

    for (let i = 1; i <= 100; i ++){
    const currentSquare = getNewSquare();
    numeriUnici = generaNumeriCasualiUnici(1, 100, 10);
    const squareContent = i;
    currentSquare.innerHTML += `<span> ${squareContent}</span>`
    currentSquare.classList.add('clicked')
    

    currentSquare.addEventListener('click', function(){
        currentSquare.classList.toggle('clicked');
        console.log(squareContent)
    });

    mainContentEl.appendChild(currentSquare);
    
}



})

// Funzione per generare numeri casuali
function getRandomNumber (minNumber, maxNumber){
    return Math.floor(Math.random()*(maxNumber - minNumber + 1) + minNumber)
}

// Funzione per generare numeri casuali unici in un range specificato

function generaNumeriCasualiUnici(minNumber, maxNumber, quantita) {
    if (maxNumber - minNumber + 1 < quantita) {
        console.error("Impossibile generare numeri unici");
        return [];
    }

    let numeriCasuali = [];
    while (numeriCasuali.length < quantita) {
        let numeroCasuale = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        if (!numeriCasuali.includes(numeroCasuale)) {
            numeriCasuali.push(numeroCasuale);
        }
    }

    return numeriCasuali;
}


