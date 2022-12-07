import {splitHalf, readInput, findRepeatedLetter, getAscii, isUpperCase} from "../../utils/index.js";

const input = readInput().trim().split("\n");
const LOWER = 96;
const UPPER = 38;

const firstPartResult = input.reduce((prev, curr) => {
  const [first, second] = splitHalf(curr);
  const repeatLetter = findRepeatedLetter(first, second);
  const ascii = getAscii(repeatLetter);
  return prev + ascii - (isUpperCase(ascii) ? UPPER : LOWER);
}, 0)


console.log('Part 1: ' + firstPartResult);
console.log('Part 2: ' + firstPartResult);
