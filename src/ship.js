function Ship(type, length, isVertical) {
  const hits = [];

  const hit = (position) => {
    if (hits.includes(position) || position < 0 || position >= length) {
      return;
    };
    hits.push(position);
  };

  const isSunk = () => hits.length === length;

  return { type, length, isVertical, hits, hit, isSunk };
};

export default Ship;