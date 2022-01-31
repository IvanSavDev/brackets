module.exports = function check(str, bracketsConfig) {
  const stack = [];

  const obj = {};
  const keyObj = [];
  const sameValue = [];

  for (const element of bracketsConfig) {
    obj[element[1]] = element[0];
    keyObj.push(element[0]);
    if(element[0] === element[1]) {
      sameValue.push(element[0]);
    }
  }

  for(let i = 0; i < str.length; i++) {
    if(keyObj.includes(str[i])) {

      if(str[i] === stack[stack.length - 1] && sameValue.includes(str[i])) {
        stack.pop();
        continue;
      }
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (stack[stack.length - 1] === obj[str[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
