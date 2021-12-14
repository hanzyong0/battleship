function createBoardDOM(player, board) {
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      cell.id = `${i * 10 + j}`;
      if (player.playerInfo.name == 'cpu') {
        cell.classList.add('cpu');
      } else {
        cell.classList.add('player');
      };
      row.appendChild(cell);
    };
    board.appendChild(row);
  };
  if (player.playerInfo.name == 'cpu') {
    return;
  } else {
    const title = document.querySelector('.player-name');
    title.textContent = `${player.playerInfo.name}`;
  };
}

export default createBoardDOM;