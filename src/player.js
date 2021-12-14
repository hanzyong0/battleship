function Player(name) {
  const playerInfo = {
    name,
    prevShots: [],
  }

  const getRandom = () => {
    return Math.floor(Math.random() * 100);
  };

  const randomMove = () => {
    let position = getRandom();
    while (playerInfo.prevShots.includes(position)) {
      position = getRandom();
    };
    playerInfo.prevShots.push(position);
    return position;
  };

  return { playerInfo, randomMove };
}

export default Player;