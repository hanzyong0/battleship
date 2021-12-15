import './style.css';
import createBoardDOM from './createBoardDOM';
import Player from './player.js';
import NewGame from './newGame';
import playGame from './playGame';

const gameboards = NewGame();
const playerGameBoard = gameboards.playerGameBoard;
const cpuGameBoard = gameboards.cpuGameBoard;
const player = Player('Human');
const cpu = Player('cpu');

const playerGameBoardDOM = document.querySelector(".player-board");
const cpuGameBoardDOM = document.querySelector(".cpu-board");

createBoardDOM(player, playerGameBoardDOM);
createBoardDOM(cpu, cpuGameBoardDOM);

gameboards.addListeners();
gameboards.placeCPUShips();

playGame(player, playerGameBoard, cpu, cpuGameBoard);

const button = document.querySelector('.new-game');
button.addEventListener('click', () => {
  location.reload();
});