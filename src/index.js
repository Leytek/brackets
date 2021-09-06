module.exports = check = (str, bracketsConfig, stack = []) =>
  str.split('').reduce((a, e) =>
    bracketsConfig.reduce((aa, ee) =>
      a ? e === ee[0] ? e === ee[1] ? stack[stack.length-1] === e ? stack.pop() === e : (stack.push(e), aa) : (stack.push(e), aa) :
      e === ee[1] ? stack.pop() === ee[0] : aa : a, true), true) && stack.pop() === undefined
