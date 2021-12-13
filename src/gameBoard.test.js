import GameBoard from "./gameBoard";
import Ship from "./ship";

test('board exists', () => {
  const gameboard = GameBoard();
  expect(gameboard.boardInfo.board[50]).toEqual({ ship: false, isHit: false });
});

test('place ship horizontally', () => {
  const gameboard = GameBoard();
  const horizontal = Ship('h', 3, false);
  gameboard.placeShip(horizontal, 2);
  expect(gameboard.boardInfo.board[2]).toEqual({ ship: 'h', isHit: false });
  expect(gameboard.boardInfo.board[3].ship).toBe('h');
  expect(gameboard.boardInfo.board[4].ship).toBe('h');
});

test('place ship vertically', () => {
  const gameboard = GameBoard();
  const vertical = Ship('v', 3, true);
  gameboard.placeShip(vertical, 2);
  expect(gameboard.boardInfo.board[2]).toEqual({ ship: 'v', isHit: false });
  expect(gameboard.boardInfo.board[12].ship).toBe('v');
  expect(gameboard.boardInfo.board[22].ship).toBe('v');
});

test('receive attack on ship', () => {
  const gameboard = GameBoard();
  const horizontal = Ship('h', 3, false);
  gameboard.placeShip(horizontal, 2);
  gameboard.receiveAttack(4);
  expect(gameboard.boardInfo.board[4].isHit).toBe(true);
});

test('missed attack', () => {
  const gameboard = GameBoard();
  const horizontal = Ship('h', 3, false);
  gameboard.placeShip(horizontal, 2);
  gameboard.receiveAttack(1);
  expect(gameboard.boardInfo.missed).toEqual([1]);
});

test('all ships sunk', () => {
  const gameboard = GameBoard();
  const horizontal = Ship('h', 2, false);
  gameboard.placeShip(horizontal, 2);

  gameboard.receiveAttack(2);
  gameboard.receiveAttack(3);

  const vertical = Ship('v', 2, true);
  gameboard.placeShip(vertical, 5);

  gameboard.receiveAttack(5);
  gameboard.receiveAttack(15);

  expect(gameboard.allShipsSunk()).toBe(true);
});