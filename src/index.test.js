import Ship from "./ship";

test('ship array exists', () => {
  const ship = Ship(2);
  expect(ship.array).toEqual(['O', 'O']);
});

test('ship is hit', () => {
  const ship = Ship(2);
  ship.hit(1);
  expect(ship.array).toEqual(['O', 'X']);
});

test('ship is sunk', () => {
  const ship = Ship(3);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  expect(ship.isSunk).toBeTruthy();
});