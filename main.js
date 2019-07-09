const board = document.getElementById('board');
const boardPieces = document.querySelectorAll(".board-piece");

var piecesArray = [['piece1','piece2','piece3'],
                   ['piece4','piece5','piece6'],
                   ['piece7','piece8','piece9']];

/*var counter = 1;
var elm = document.getElementById('piece1');

do{

    flash()
    counter++;
}while(counter <= 5)

function flash()
{
  setTimeout(function(){elm.click();
            console.log("delay!!!");
  }, 2000 * counter);
}*/

runGame();

function runGame(){
    var patternList = [];
    var counter = 1;
    var maximum = 9;
    var minimum = 1;
    var randomNum;
    var chosenElm;

    do{

        /*for(let i = 1; i <= counter; i++)
        {

        }*/

        flash();

        counter++;
    }while(counter <= 10)

    function flash(){
        setTimeout(function(){
                                randomNum = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                                patternList.push(randomNum);
                                chosenElm = choosePiece(randomNum);
                                console.log(chosenElm.id);
                                chosenElm.click()  
                             }, 2000 * counter);
    }

    console.log(patternList);

}

function choosePiece(num){
    
    /*switch(num){
        case 1:
            return document.getElementById('piece1');
            break;
        case 2:
            return document.getElementById('piece2');
             break;
        case 3:
            return document.getElementById('piece3');
            break;
        case 4:
            return document.getElementById('piece4');
            break;
        case 5:
            return document.getElementById('piece5');
            break;
        case 6:
            return document.getElementById('piece6');
            break;
        case 7:
            return document.getElementById('piece7');
            break;
        case 8:  
            return document.getElementById('piece8');
            break;
        case 9:
            return document.getElementById('piece9');
             break;     
    }*/
   return document.getElementById('piece' + num);
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

var simulateClick = function (elem) {
	// Create the event
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
};

boardPieces.forEach(piece => piece.addEventListener('click',clickFlash));