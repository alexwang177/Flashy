const board = document.getElementById('board');
const boardPieces = document.querySelectorAll(".board-piece");

runGame();

function runGame(){
    var patternList = [];

    var pieceCount = 1;
    var pieceIndex = 0;

    const MAX_ROUNDS = 100;

    var maximum = 9;
    var minimum = 1;

    var randomNum;
    var chosenElm;

    var displayPatterns = setInterval(flash, 1500);

    function flash(){
        randomNum = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        patternList.push(randomNum);
        chosenElm = choosePiece(patternList[pieceIndex]);
        chosenElm.click()  
    
        pieceIndex++;

        if(pieceIndex == pieceCount)
        {
            pieceIndex = 0;
            pieceCount++;
            checkPlayerInput();
        }

        if(pieceCount > MAX_ROUNDS)
            clearInterval(displayPatterns);

        console.log(patternList);
    }

}

function choosePiece(num){
   return document.getElementById('piece' + num);
}

function checkPlayerInput(){

}

function clickFlash(e){
  let id = e.target.id;
  let elm = document.getElementById(id);

  switch(id){
    case 'piece1':
            elm.classList.remove('flashOne');
            setTimeout(function(){elm.classList.add('flashOne')},0.01);
            break;
    case 'piece2':
            elm.classList.remove('flashTwo');
            setTimeout(function(){elm.classList.add('flashTwo')},0.01);
            break;    
    case 'piece3':
            elm.classList.remove('flashThree');
            setTimeout(function(){elm.classList.add('flashThree')},0.01);
            break;
    case 'piece4':
            elm.classList.remove('flashFour');
            setTimeout(function(){elm.classList.add('flashFour')},0.01);
            break;
    case 'piece5':
            elm.classList.remove('flashFive');
            setTimeout(function(){elm.classList.add('flashFive')},0.01);
            break;
    case 'piece6':
            elm.classList.remove('flashSix');
            setTimeout(function(){elm.classList.add('flashSix')},0.01);
            break;
    case 'piece7':
            elm.classList.remove('flashSeven');
            setTimeout(function(){elm.classList.add('flashSeven')},0.01);
            break;
    case 'piece8':
            elm.classList.remove('flashEight');
            setTimeout(function(){elm.classList.add('flashEight')},0.01);
            break;
    case 'piece9':
            elm.classList.remove('flashNine');
            setTimeout(function(){elm.classList.add('flashNine')},0.01);
            break;
  }
}

boardPieces.forEach(piece => piece.addEventListener('click',clickFlash));