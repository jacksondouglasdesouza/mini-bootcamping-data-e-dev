let state = {
  board:[],
  currentGame:[],
  savedGames:[]
};

//START GAME
function start() {
  readLocalStorage();
  createBoard();
  newGame();
}

//READ LOCAL STORAGE

function readLocalStorage(){
  
  if(!window.localStorage){
    return;
  }

  let savedGamesFromLocalStorage = window.localStorage.getItem('saved-games');

  if(savedGamesFromLocalStorage){
    state.savedGames = JSON.parse(savedGamesFromLocalStorage);
  }

} 
// ESCREVE LOCAL STORAGE

function writeToLocalStorage(){

  window.localStorage.setItem('saved-games', JSON.stringify(state.savedGames));

}

//CREATE BOARD
function createBoard(){
  state.board = [];

  for(let i = 1; i <= 60; i++){
    state.board.push(i);
  }

}

//NEW GAME
function newGame(){
  resetGame();
  render();
}

//RENDER ******
function render(){
  renderBoard();
  renderButtons();
  renderSavedGames();
}

//RENDER BOARD
function renderBoard(){
  let divBoard = document.querySelector('#megasena-board');
  divBoard.innerHTML = '';

  let ulNumbers = document.createElement('ul');
  ulNumbers.classList.add('numbers');

  for(let i = 0; i < state.board.length; i++){
    let currentNumber = state.board[i];

    let liNumber = document.createElement('li');
    liNumber.textContent = currentNumber;
    liNumber.classList.add('number');

    liNumber.addEventListener('click', handleNumberClick);

    if(isNumberInGame(currentNumber)){
      liNumber.classList.add('selected-number');
    }

    ulNumbers.appendChild(liNumber);
  }

  divBoard.appendChild(ulNumbers);
}

//HANDLE NUMBER CLICK
function handleNumberClick(event){
  let value = Number(event.currentTarget.textContent);

    if(isNumberInGame(value)){
      removeNumberFromGame(value);
  } else {
      addNumberToGame(value);
  }
  render();
}

//RENDER BUTTONS
function renderButtons(){
  let divButtons = document.querySelector('#megasena-buttons');
  divButtons.innerHTML = '';

  let buttonNewGame = createNewGameButton();
  //jogo aleatório
  let buttonRandomGame = createRandomGameButton();
  //salvar jogo
  let buttonSaveGame = createSaveGameButton();

  divButtons.appendChild(buttonNewGame);
  divButtons.appendChild(buttonRandomGame);
  divButtons.appendChild(buttonSaveGame);


/*   let buttonNewGame = document.createElement('button');
  buttonNewGame.textContent = 'New Game';
  buttonNewGame.addEventListener('click', newGame);
  divButtons.appendChild(buttonNewGame); */
}

//RENDER BUTTON RANDOM GAME CREATE
function createRandomGameButton(){
  let button = document.createElement('button');
  button.textContent = 'Random Game';

  button.addEventListener('click', randomGame);

  return button;

}

//CREATE NEW ELEMENT BUTTON GAME
function createNewGameButton(){
  let button = document.createElement('button');
  button.textContent = 'New Game';

  button.addEventListener('click', newGame);

  return button;
}

//CREATE SAVE GAME BUTTON
function createSaveGameButton(){
  let button = document.createElement('button');
  button.textContent = 'Save Game';
  button.disabled = !isGameComplete();

  button.addEventListener('click', saveGame);

  return button;
}

//RENDER SAVED GAMES
function renderSavedGames(){
  let divSavedGames = document.querySelector('#megasena-saved-games');
  divSavedGames.innerHTML = '';

  if(state.savedGames.length === 0){
    divSavedGames.innerHTML = '<p>Não há jogos salvos</p>';
  } else {
    let ulSavedGames = document.createElement('ul');

    for(let i = 0; i < state.savedGames.length; i++){
      let currentGame = state.savedGames[i];

      let liGame = document.createElement('li');
      liGame.textContent = currentGame.join(' - ');

      ulSavedGames.appendChild(liGame);
    }
    divSavedGames.appendChild(ulSavedGames);
  }

}

// ADD NUMBER TO GAME
function addNumberToGame(numberToAdd){
  if(numberToAdd < 1 || numberToAdd > 60){
    console.error('Number to add is not valid', numberToAdd);
    return;
  }

  if(state.currentGame.length >= 6){
    console.error('Game is full');
    return;
  }

  if(isNumberInGame(numberToAdd)){
    console.error('Number is already in game', numberToAdd);
    return;
  }

  state.currentGame.push(numberToAdd);
}

//REMOVE NUMBER FROM GAME
function removeNumberFromGame(numberToRemove){
  if(numberToRemove < 1 || numberToRemove > 60){
    console.error('Number to add is not valid', numberToRemove);
    return;
  }

  let newGame = [];

  for(let i = 0; i < state.currentGame.length; i++){
    let currentNumber = state.currentGame[i];

    if(currentNumber === numberToRemove){
      continue;
    }
    newGame.push(currentNumber);
  }
  state.currentGame = newGame;
}

//CHECK IF NUMBER IS IN GAME
function isNumberInGame(numberToCheck){
  if(state.currentGame.includes(numberToCheck)){
    return true;
  }
  return false;
}

//COMPLETE GAME?
function isGameComplete(){
  if(state.currentGame.length === 6){
    return true;
  }
  return false;
}

//SAVE GAME 
function saveGame(){
  if(!isGameComplete()){
    console.error('Game is not complete');
    return;
  }

  state.savedGames.push(state.currentGame);
  writeToLocalStorage();
  newGame();

}


//RESET GAME
function resetGame(){
  state.currentGame = [];
}

//RANDOM GAME *** ZERAR O JOGO ***
function randomGame(){
  resetGame();

  while(!isGameComplete()){
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    addNumberToGame(randomNumber);
  }

  //let randomNumber = Math.ceil(Math.random() * 60);
  
/*   addNumberToGame(randomNumber);
  render(); */
  render();

}

start();