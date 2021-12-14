import Player from "./player";

test('position within 100', () => {
  const player = Player('test');
  expect(player.randomMove()).toBeLessThan(100);
  expect(player.randomMove() >= 0).toBe(true);
})

test('position within 100', () => {
  const player = Player('test');
  expect(player.randomMove()).toBeLessThan(100);
  expect(player.randomMove() >= 0).toBe(true);
})