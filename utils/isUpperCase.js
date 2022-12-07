export const isUpperCase = (c) => {
  if(typeof c === 'string') {
    return c === c.toUpperCase();
  }
  if(typeof c === 'number') {
   return c >= 65 && c <= 90
  }
  throw Error(`${c} can't use isUpperCase function`);
}
