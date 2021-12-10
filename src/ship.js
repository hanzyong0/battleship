function Ship(n) {
  const array = Array.from('O'.repeat(n));
  const hit = (index) => {
    array[index] = 'X';
  };
  const isSunk = () => {
    array.every((element) => element === 'X')
  };
  return { array, hit, isSunk };
}

export default Ship;