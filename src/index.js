import './style.css';
import createBoardDOM from './createBoardDOM';
import Player from './player.js';

const a = Player('1');
const playerBoard = document.querySelector('.player-board');
createBoardDOM(a, playerBoard);

const b = Player('cpu');
const cpuBoard = document.querySelector('.cpu-board');
createBoardDOM(b, cpuBoard);