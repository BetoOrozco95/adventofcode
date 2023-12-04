import {readInput} from "../../utils/index.js";

const input = readInput().split("\n");

const hasAdjacent = (i, j) => {
  const line = input[i];
  const upLine = input[i - 1];
  const downLine = input[i + 1];
  const adjacent = [
    line?.[j + 1],
    line?.[j - 1],
    upLine?.[j],
    upLine?.[j - 1],
    upLine?.[j + 1],
    downLine?.[j],
    downLine?.[j - 1],
    downLine?.[j + 1],
  ].filter(Boolean);
  return  adjacent.some(c => !/[0-9.]/.test(c) );
}

let validPartNumber = [];
let partNumber = [];

for (let i = 0; i < input.length; i++) {
  const line = input[i];
  for (let j = 0; j < line.length; j++) {
    const c = line[j];
    if (Number(c) >= 0) {
      partNumber.push({ i: j, n: c})
      if(line.length - 1 !== j){
        continue;
      }
    }
    if(partNumber.length > 0) {
      const number = partNumber.reduce((str, part) => str + part.n, '');
      const index = partNumber.map((part) => part.i);
      if(index.some(idx => hasAdjacent(i, idx))) {
        validPartNumber.push(+number);
      }
    }
    partNumber = [];
  }
}

console.log(validPartNumber)
console.log(validPartNumber.reduce((sum, num) => sum + num, 0))

