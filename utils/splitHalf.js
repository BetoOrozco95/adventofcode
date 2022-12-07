export const splitHalf = (s) => {
  const len = s.length;
  const middle = len % 2 === 0 ? len / 2 : (len / 2) - 1;
  return [s.substring(0, middle), s.substring(middle, len)]
}
