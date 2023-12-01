import {readInput} from "../../utils/index.js";

const input =
  readInput()
    .trim()
    .split('\n');
// input.slice(0, 8).map(c => c.replace(/[^a-zA-Z ]/g, ""));

const test=input
  .slice(0, 8)
  .map(c =>  [...c.padEnd(35)]);


let crates = input
  .slice(0, 8)
  .map(c =>  c.padEnd(35))
  .map(c => c.replace(/[^a-zA-Z]/g, ""))



console.log(crates)
const stacks = {};
crates.forEach((rows) => {
  [...rows].forEach((r, i) => {
    stacks[i+1] =  (stacks[i+1] || '') + r;
  });
})


