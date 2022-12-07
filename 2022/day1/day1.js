import {readInput} from "../../utils/readInput.js";

const input = readInput().split("\n\n");

const sums = input.map(foodsCalories => {
  const parseFoodCalories = foodsCalories.split("\n")
  return parseFoodCalories.reduce((prev, acc) => +prev + +acc, 0);
});
sums.sort((a,b) => b-a);
const max = sums[0];
const sumsOfTopTotal = sums[0] + sums[1] + sums[2];

console.log('Part 1: ' + max);
console.log('Part 2: ' + sumsOfTopTotal);
