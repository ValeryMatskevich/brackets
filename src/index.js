module.exports = function check(str, bracketsConfig) {
  const pair = Object.fromEntries(bracketsConfig)
  const pairKeys = Object.keys(pair)
  let stack = []

  for (let i = 0; i < str.length; i++) {
    let bracket = str[i]
    let lastElement = stack[stack.length - 1]
      if (pairKeys.includes(bracket)) {
        stack.push(bracket)
        console.log(stack)
        if (stack.length >= 2 && stack[stack.length - 1]  === stack[stack.length - 2] && stack[stack.length - 1]  === pair[stack[stack.length - 2]]) {
          stack.pop()
          stack.pop()
        }
      } else {
          if (stack.length === 0) {
              return false
          }


      if (bracket === pair[lastElement]) {
        stack.pop()
      } else {
          return false
        }
      }
  }
  return stack.length === 0
}




