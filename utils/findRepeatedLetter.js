export const findRepeatedLetter = (s1, s2) => {
  for(let letter of s1) {
    if(s2.includes(letter)) {
      return letter;
    }
  }
  return null;
}
