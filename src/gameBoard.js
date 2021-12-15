function GameBoard() {
  const boardInfo = {
    board: [],
    missed: [],
  };

  const initBoard = () => {
    for (let i = 0; i < 100; i++) {
      boardInfo.board.push(
        {
          ship: false,
          isHit: false,
        }
      )
    }
  };
  if (boardInfo.board.length === 0) {
    initBoard();
  };

  const placeShip = (ship, position) => {
    if (!ship.isVertical) {
      for (let i = 0; i < ship.length; i++) {
        boardInfo.board[position + i].ship = ship.type;
      };
    } else if (ship.isVertical) {
      for (let i = 0; i < ship.length * 10; i += 10) {
        boardInfo.board[position + i].ship = ship.type;
      }
    }
  };

  const receiveAttack = (position) => {
    if (boardInfo.board[position].ship && !boardInfo.board[position].isHit) {
      boardInfo.board[position].isHit = true;
    } else if (boardInfo.board[position].ship && boardInfo.board[position].isHit) {
      return;
    } else {
      boardInfo.missed.push(position);
    }
  };

  const allShipsSunk = () => {
    for (let i = 0; i < 100; i++) {
      if (boardInfo.board[i].ship && !boardInfo.board[i].isHit) {
        return false;
      }
    }
    return true;
  };

  return { boardInfo, initBoard, placeShip, receiveAttack, allShipsSunk };
}

export default GameBoard;