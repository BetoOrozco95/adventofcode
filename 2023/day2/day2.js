import {readInput} from "../../utils/index.js";

const input = readInput().split("\n");

const dict = {
  red: 12,
  green: 13,
  blue: 14
}

const getGames = game => game.match(/([0-9]+\s)*[a-z]+/g);

const resolvePart1 = () => input.reduce((sum, record) => {
  const [titleStr, gamesStr] = record.split(':');
  const [, gameId] = titleStr.split(' ');
  const isPossible = getGames(gamesStr).every(game => {
    const [cubes, color] = game.split(' ');
    return dict[color] >= cubes
  });
  return isPossible ? sum + +gameId : sum;
}, 0)

const resolvePart2 = () => input.reduce((sum, record) => {
  const [, gamesStr] = record.split(':');
  const maxCubes = getGames(gamesStr).reduce((map, game) => {
    const [cubes, color] = game.split(' ');
    map[color] = Math.max(map[color], cubes)
    return map;
  }, {red: 0, green: 0, blue: 0});
  const power = Object.values(maxCubes).reduce((result, cube) => result * cube);
  return sum + power;
}, 0)

console.log(`Result part one: ${resolvePart1(input)}`);
console.log(`Result part two: ${resolvePart2(input, true)}`);
