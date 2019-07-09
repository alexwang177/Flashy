const board = document.getElementById('board');
const boardPieces = document.querySelectorAll(".board-piece");

var piecesArray = [['piece1','piece2','piece3'],
                   ['piece4','piece5','piece6'],
                   ['piece7','piece8','piece9']];

var counter = 1;
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