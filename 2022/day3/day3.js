import {splitHalf, readInput, findUniqueRepeatedLetter, getAscii, isUpperCase} from "../../utils/index.js";

const input = readInput().trim().split("\n");
const LOWER = 96;
const UPPER = 38;

const firstPartResult = input.reduce((prev, curr) => {
  const [first, second] = splitHalf(curr);
  const repeatLetter = findUniqueRepeatedLetter(first, second);
  const ascii = getAscii(repeatLetter);
  return prev + ascii - (isUpperCase(ascii) ? UPPER : LOWER);
}, 0);

let secondPartResult = 0;
for (let i = 0; i < input.length; i += 3) {
  const firstGroup = input[i];
  const secondGroup = input[i + 1];
  const thirdGroup = input[i + 2];
  const repeatLetter = findUniqueRepeatedLetter(firstGroup, secondGroup, thirdGroup);
  const ascii = getAscii(repeatLetter);
  secondPartResult += ascii - (isUpperCase(ascii) ? UPPER : LOWER);
}

console.log('Part 1: ' + firstPartResult);
console.log('Part 2: ' + secondPartResult);
