import fs from "fs";

export const readInput = (path = 'input') => {
  return fs.readFileSync(path, 'utf8');
}
