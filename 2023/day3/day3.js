import {readInput} from "../../utils/index.js";

const input = readInput().split("\n");

const getNumber = (str, idx) => {
  let number = str[idx];
  if(!/[0-9]/.test(number)) return NaN;
  let leftIdx = 1;
  let rightIdx = 1;
  while(/[0-9]/.test(str[idx - leftIdx])) {
    number = `${str[idx - leftIdx]}${number}`;
    leftIdx++;
  }
  while(/[0-9]/.test(str[idx + rightIdx])) {
    number = `${number}${str[idx + rightIdx]}`;
    rightIdx++;
  }
  return +number;
}

const hasAdjacentNumber = (i, j, part1 = false) => {
  const line = input[i];
  const upLine = input[i - 1];
  const downLine = input[i + 1];
  const adjacent = [
    [line, j + 1],
    [line, j - 1],
    [upLine, j],
    [upLine, j - 1],
    [upLine, j + 1],
    [downLine, j],
    [downLine, j - 1],
    [downLine, j + 1],
  ].map(([str, idx]) => getNumber(str, idx)).filter(Boolean);

  const removeDuplicates = [...new Set(adjacent)];
  if(part1) {
    return removeDuplicates.reduce((sum, number) => sum + number, 0);
  }
  if(removeDuplicates.length === 2) {
    return removeDuplicates[0] * removeDuplicates[1];
  }
  return  0;
}

const resolve = () => {
  let resultPart1 = 0;
  let resultPart2 = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if(!/[0-9.]/.test(input[i][j])) {
        resultPart1 += hasAdjacentNumber(i, j, true);
      }
      if (input[i][j] === '*') {
        resultPart2 += hasAdjacentNumber(i, j);
      }
    }
  }
  return {
    resultPart1,
    resultPart2
  };
}
const {resultPart1, resultPart2} = resolve();

console.log(`Result part one: ${resultPart1}`);
console.log(`Result part one: ${resultPart2}`);
