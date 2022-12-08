import {readInput} from "../../utils/index.js";

const input =
  readInput('../day4/input')
    .trim()
    .split('\n')
    .map(s => s.split(',')
      .map(s => s.split('-')
        .map(s => +s)));

let firstPartResult = 0;
let secondPartResult = 0;
for (let i = 0; i < input.length; i++) {
  const [sectionA, sectionB] = input[i];
  const [aX, aY] = sectionA;
  const [bX, bY] = sectionB;

  if ((aX >= bX && aY <= bY) || (bX >= aX && bY <= aY)) {
    firstPartResult++;
  }
  // https://stackoverflow.com/questions/3269434/whats-the-most-efficient-way-to-test-if-two-ranges-overlap
  if (aX <= bY && bX <= aY ) {
    secondPartResult++;
  }
}

console.log('Part 1: ' + firstPartResult);
console.log('Part 2: ' + secondPartResult);

