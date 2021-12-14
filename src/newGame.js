import Ship from "./ship";
import GameBoard from "./gameBoard";

function NewGame() {
  const playerGameBoard = GameBoard();
  const computerGameBoard = GameBoard();

  const status = document.querySelector('.status');
  status.textContent = 'Please place your ships...';

  const current = {
    type: 'carrier',
    length: 5,
    isVertical: false,
  };

  const displayShip = (length, position) => {

  };

  // carrier: 5
  // battleship: 4
  // destroyer: 3
  // submarine: 3
  // patrol boat: 2

  return {};
};

export default NewGame;