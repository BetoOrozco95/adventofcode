import {readInput} from "../../utils/index.js";

const input = readInput().trim().split("\n");

const win = {
  A : 'C',
  B : 'A',
  C : 'B'
}
const lose = {
  A : 'B',
  B : 'C',
  C : 'A'
}
const convertHand = {
  X: 'A',
  Y: 'B',
  Z: 'C'
}
const defaultValues = {
  A: 1,
  B: 2,
  C: 3,
}
let calculateFirstPart = (a,b) => {
  if( a === b) return defaultValues[b] + 3;
  if(a === win[b]) return defaultValues[b] + 6;
  if(a === lose[b]) return defaultValues[b];
}

let firstPartResult = input.reduce((pre, curr) => {
  return  pre + calculateFirstPart(curr[0], convertHand[curr[2]]);
}, 0);

let calculateSecondPart = (a,b) => {
  if(b === 'B') return defaultValues[a] + 3;
  if(b === 'A') return defaultValues[win[a]];
  if(b === 'C') return defaultValues[lose[a]] + 6;
}

let secondPartResult = input.reduce((pre, curr) => {
  return  pre + calculateSecondPart(curr[0], convertHand[curr[2]]);
}, 0);

console.log('Part 1: ' + firstPartResult);
console.log('Part 2: ' + secondPartResult);
