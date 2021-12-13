import Ship from "./ship";

const ship = Ship('Destroyer', 4, false);

test('ship length', () => {
  expect(ship).toHaveLength(4);
});

test('ship hit twice', () => {
  ship.hit(1);
  ship.hit(3);
  expect(ship.hits).toEqual([1, 3]);
});

test('ship sunk', () => {
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  expect(ship.isSunk()).toBeTruthy();
});