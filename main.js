const board = document.getElementById('board');
const boardPieces = document.querySelectorAll(".board-piece");
const scoreBoard = document.getElementById('score');
const modal = document.getElementById('modal');
const result = document.getElementById('result');

var playerList = [];
var patternList = [];

var pieceCount = 1;
var pieceIndex = 0;
var score = 0;

const MAX_ROUNDS = 100;

var maximum = 9;
var minimum = 1;

var randomNum;
var chosenElm;

var displayPatterns;
var displayOn = false;

runGame();

//Runs the game
function runGame(){
    displayPatterns = setInterval(flash, 1500);
    displayOn = true;
}

//Flashes the pattern on the screen
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
        clearPlayer();
        clearInterval(displayPatterns);
        displayOn = false;
    }

    if(pieceCount > MAX_ROUNDS)
    {
        clearInterval(displayPatterns);
        displayOn = false;
    }
}

//Clears the player's clicks
function clearPlayer()
{
    playerList = [];
}

//Displays 'Try Again' if incorrect pattern is entered
function showMistake(){
    result.innerHTML = `<h2>Try Again</h2>`;
    modal.style.display = 'block';
    setTimeout(function(){clearModal()}, 2400);
}

//Displays 'Next Level' if correct pattern is entered
function showComplete(){
    result.innerHTML = `<h2>Next Level</h2>`;
    modal.style.display = 'block';
    setTimeout(function(){clearModal()}, 2400);
}

//Clears the modal
function clearModal(){
    modal.style.display = 'none';
}

//Returns the piece that was clicked
function choosePiece(num){
   return document.getElementById('piece' + num);
}

//Checks if the player entered the correct pattern 
function checkPlayerInput(){

    console.log('playerList: ' + playerList);
    console.log('patternList: ' + patternList);
    console.log('Piececount: ' + pieceCount);
    console.log('Score: ' + score);

    let correct = true;
    
    if(playerList[playerList.length-1] != patternList[playerList.length-1])
    {
        correct = false;
        console.log('TRY AGAIN');
        pieceIndex = 0;
        pieceCount--;
        showMistake();
        setTimeout(function(){runGame()},2400);
    }
    else
    {
        console.log('GOOD MOVE');
    }
  
    if(correct && playerList.length == pieceCount-1)
    {
        score++;
        scoreBoard.innerHTML = `Score: ${score}`;
        showComplete();
        setTimeout(function(){runGame()},2400);
        console.log('NEXT LEVEL')
    }

}

//Flashes the piece that is clicked 
function clickFlash(e){
  let id = e.target.id;
  let elm = document.getElementById(id);

  switch(id){
    case 'piece1':
            elm.classList.remove('flashOne');
            setTimeout(function(){elm.classList.add('flashOne')},0.01);
            playerList.push(1);
            break;
    case 'piece2':
            elm.classList.remove('flashTwo');
            setTimeout(function(){elm.classList.add('flashTwo')},0.01);
            playerList.push(2);
            break;    
    case 'piece3':
            elm.classList.remove('flashThree');
            setTimeout(function(){elm.classList.add('flashThree')},0.01);
            playerList.push(3);
            break;
    case 'piece4':
            elm.classList.remove('flashFour');
            setTimeout(function(){elm.classList.add('flashFour')},0.01);
            playerList.push(4);
            break;
    case 'piece5':
            elm.classList.remove('flashFive');
            setTimeout(function(){elm.classList.add('flashFive')},0.01);
            playerList.push(5);
            break;
    case 'piece6':
            elm.classList.remove('flashSix');
            setTimeout(function(){elm.classList.add('flashSix')},0.01);
            playerList.push(6);
            break;
    case 'piece7':
            elm.classList.remove('flashSeven');
            setTimeout(function(){elm.classList.add('flashSeven')},0.01);
            playerList.push(7);
            break;
    case 'piece8':
            elm.classList.remove('flashEight');
            setTimeout(function(){elm.classList.add('flashEight')},0.01);
            playerList.push(8);
            break;
    case 'piece9':
            elm.classList.remove('flashNine');
            setTimeout(function(){elm.classList.add('flashNine')},0.01);
            playerList.push(9);
            break;
  }

  if(!displayOn)
    checkPlayerInput();
}

//Event Listeners
boardPieces.forEach(piece => piece.addEventListener('click',clickFlash));