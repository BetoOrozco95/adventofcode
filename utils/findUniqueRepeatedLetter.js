// https://stackoverflow.com/questions/11076067/finding-matches-between-multiple-javascript-arrays
export const findUniqueRepeatedLetter = (...args) => args.reduce((p,c) => [...p].filter(e => c.includes(e)))[0]
