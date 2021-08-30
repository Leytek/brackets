module.exports = check = (str, bracketsConfig, stack = []) =>
 str.split('').reduce((a, e) =>
   a && bracketsConfig.reduce((aa, ee) =>
    ((e === ee[0] && e !== ee[1]) ? (stack.push(e), aa) :
     (e !== ee[0] && e === ee[1]) ? (aa && (stack.pop() === ee[0])) :
      (e === ee[0] && e === ee[1]) ? stack[stack.length-1] === e ? (aa &&  (stack.pop() === e)) :
       (stack.push(e), aa) : aa), true), true) && stack.pop() === undefined