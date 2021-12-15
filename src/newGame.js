import Ship from "./ship";
import GameBoard from "./gameBoard";

function NewGame() {
  const playerGameBoard = GameBoard();
  const cpuGameBoard = GameBoard();

  const status = document.querySelector('.status');
  status.textContent = 'Please place your ships...';

  // Start with ship with longest length
  const current = {
    type: 'carrier',
    length: 5,
    isVertical: false,
  };

  // Display ship when hover
  const displayShip = (length, position) => {
    const hovered = document.querySelectorAll('.hovered');
    for (let i = 0; i < hovered.length; i++) {
      hovered[i].classList.remove('hovered');
    };
    // If ship is vertical
    if (current.isVertical) {
      // Within boundary
      if (position + (length - 1) * 10 > 100) {
        return;
      };
      // Check whether ship present then add .hovered class
      for (let i = position; i < position + length * 10; i += 10) {
        const cell = document.querySelector(`.player[id='${i}']`);
        if (cell.classList.contains('ship')) {
          return;
        };
        cell.classList.add('hovered');
      };
    };
    // If ship is horizontal
    if (!current.isVertical) {
      // Within boundary
      if (position + length - 1 >= Math.ceil(position / 10) * 10 && position % 10 != 0) {
        return;
      };
      // Check whether ship present then add .hovered class
      for (let i = position; i < position + length; i++) {
        const cell = document.querySelector(`.player[id='${i}']`);
        if (cell.classList.contains('ship')) {
          return;
        };
        cell.classList.add('hovered');
      };
    };
  };

  const hoverShips = (e) => {
    const position = Number(e.target.id);
    if (current.type == 'carrier') {
      displayShip(5, position);
    } else if (current.type == 'battleship') {
      displayShip(4, position);
    } else if (current.type == 'destroyer') {
      displayShip(3, position);
    } else if (current.type == 'submarine') {
      displayShip(3, position);
    } else if (current.type == 'patrol') {
      displayShip(2, position);
    };
  };

  const placeShips = (e) => {
    if (!e.target.classList.contains('hovered')) {
      return;
    };
    const hovered = document.querySelectorAll('.hovered');
    for (let i = 0; i < hovered.length; i++) {
      hovered[i].classList.remove('hovered');
    };

    const position = Number(e.target.id);
    if (current.type == 'carrier') {
      const carrier = Ship('carrier', 5, current.isVertical);
      playerGameBoard.placeShip(carrier, position);
      current.type = 'battleship';
    } else if (current.type == 'battleship') {
      const battleship = Ship('battleship', 4, current.isVertical);
      playerGameBoard.placeShip(battleship, position);
      current.type = 'destroyer';
    } else if (current.type == 'destroyer') {
      const destroyer = Ship('destroyer', 3, current.isVertical);
      playerGameBoard.placeShip(destroyer, position);
      current.type = 'submarine';
    } else if (current.type == 'submarine') {
      const submarine = Ship('submarine', 3, current.isVertical);
      playerGameBoard.placeShip(submarine, position);
      current.type = 'patrol';
    } else if (current.type == 'patrol') {
      const patrol = Ship('patrol', 2, current.isVertical);
      playerGameBoard.placeShip(patrol, position);
      current.type = '';
    };
    current.length--;
    for (let i = 0; i < 100; i++) {
      const cell = document.querySelector(`.player[id='${i}']`);
      if (playerGameBoard.boardInfo.board[i].ship != false) {
        cell.classList.add('ship');
      };
    };
  };

  // Change orientation button
  const orientation = document.querySelector('.orientation');
  orientation.addEventListener('click', () => {
    current.isVertical = !current.isVertical;
  });

  const addListeners = () => {
    document.querySelectorAll('.player').forEach((cell) => {
      cell.addEventListener('mouseover', hoverShips);
      cell.addEventListener('click', placeShips);
    });
  };

  // CPU ships
  const placeCPUShips = () => {
    const carrier = Ship("carrier", 5, Math.random() < 0.5);
    const battleship = Ship("battleship", 4, Math.random() < 0.5);
    const destroyer = Ship("destroyer", 3, Math.random() < 0.5);
    const submarine = Ship("submarine", 3, Math.random() < 0.5);
    const patrol = Ship("patrol", 2, Math.random() < 0.5);

    const randomPosition = () => {
      return Math.floor(Math.random() * 100);
    };

    const isEmpty = (ship, position) => {
      if (position + ship.length * 10 > 100) {
        return false;
      };
      if (position + ship.length - 1 >= Math.ceil(position / 10) && position % 10 != 0) {
        return false;
      };
      if (ship.isVertical) {
        for (let i = position; i < position + ship.length * 10; i += 10) {
          const cell = document.querySelector(`.cpu[id='${i}']`);
          if (cell.classList.contains('ship')) {
            return false;
          };
        }
      } else {
        for (let i = position; i < position + ship.length; i++) {
          const cell = document.querySelector(`.cpu[id='${i}']`);
          if (cell.classList.contains('ship')) {
            return false;
          };
        };
      };
      return true;
    };

    const getCPUPosition = (ship) => {
      let position = randomPosition();
      if (ship.isVertical) {
        while (position + ship.length * 10 > 100 && !isEmpty(ship, position)) {
          position = randomPosition();
        };
      } else {
        while (position + ship.length - 1 >= Math.ceil(position / 10) * 10
          && position % 10 != 0 && !isEmpty(ship, position)) {
          position = randomPosition();
        };
      };
      return position;
    };

    let position = getCPUPosition(carrier);
    cpuGameBoard.placeShip(carrier, position);

    position = getCPUPosition(battleship);
    cpuGameBoard.placeShip(battleship, position);

    position = getCPUPosition(destroyer);
    cpuGameBoard.placeShip(destroyer, position);

    position = getCPUPosition(submarine);
    cpuGameBoard.placeShip(submarine, position);

    position = getCPUPosition(patrol);
    cpuGameBoard.placeShip(patrol, position);

    // for (let i = 0; i < 100; i++) {
    //   const cell = document.querySelector(`.cpu[id='${i}']`);
    //   if (cpuGameBoard.boardInfo.board[i].ship != false) {
    //     cell.classList.add('ship');
    //   };
    // };
  };


  return { playerGameBoard, cpuGameBoard, addListeners, placeCPUShips };
};

export default NewGame;