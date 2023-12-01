import {readInput} from "../../utils/index.js";

const input = readInput().split("\n");

const dict = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}
const arrDict = Object.entries(dict).map(([key, val]) => ({
  word: key,
  number: val
}));

const parsePuzzle = (puzzle) => puzzle.split('').reduce((parsed, c) => {
  parsed += c;
  const dict = arrDict.find(dict => parsed.includes(dict.word));
  if(dict){
    parsed = parsed.replace(dict.word.slice(0, -1), dict.number)
  }
  return parsed;
}, '')

const resolve = (puzzleInput, withParse) => puzzleInput.reduce((sum, puzzle) => {
  if(withParse) {
    puzzle = parsePuzzle(puzzle);
  }
  const onlyNumbers = puzzle.replace(/[a-z]+/g, '');
  const validNumber = onlyNumbers.padStart(2, onlyNumbers);
  return sum + +`${validNumber[0]}${validNumber.at(-1)}`;
}, 0)



console.log(`Result part one: ${resolve(input)}`);
console.log(`Result part two: ${resolve(input, true)}`);
