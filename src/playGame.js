function playGame(player, playerGameBoard, cpu, cpuGameBoard) {
  const checkMissed = () => {
    for (let i of playerGameBoard.boardInfo.missed) {
      document.querySelector(`.player[id='${i}']`).classList.add('missed');
    };
    for (let i of cpuGameBoard.boardInfo.missed) {
      document.querySelector(`.cpu[id='${i}']`).classList.add('missed');
    };
  };

  const checkHit = () => {
    for (let i = 0; i < 100; i++) {
      if (playerGameBoard.boardInfo.board[i].isHit) {
        document.querySelector(`.player[id='${i}']`).classList.add('hit');
      };
      if (cpuGameBoard.boardInfo.board[i].isHit) {
        document.querySelector(`.cpu[id='${i}']`).classList.add('hit');
      };
    };
  };

  const checkWin = () => {
    const status = document.querySelector('.status');
    if (playerGameBoard.allShipsSunk()) {
      status.textContent = 'Computer Wins!';
    } else if (cpuGameBoard.allShipsSunk()) {
      status.textContent = `${player.playerInfo.name} Wins!`;
      document.querySelectorAll('.cpu').forEach((cell) => {
        cell.removeEventListener('click', playerPlay);
      });
    };
  };

  const cpuPlay = () => {
    playerGameBoard.receiveAttack(cpu.randomMove());
    checkMissed();
    checkHit();
    checkWin();
  };

  const playerPlay = (e) => {
    const status = document.querySelector('.status');
    const position = Number(e.target.id);
    if (status.textContent == 'Battle!') {
      cpuGameBoard.receiveAttack(position);
      checkMissed();
      checkHit();
      checkWin();
      cpuPlay();
    }
  };

  document.querySelectorAll('.cpu').forEach((cell) => {
    cell.addEventListener('click', playerPlay);
  });
}

export default playGame;