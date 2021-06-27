// {[()]} 分析
// 使用栈的思想，先进栈的放到栈底，后进的放到栈顶，
// 首先匹配栈顶的是否匹配了,匹配的移出栈

const isValid = (s) => {
  if (!s || s.length % 2 === 1) {
    return false;
  }

  const stack = [];
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const value = map.get(s[i]);
      if (value !== stack[stack.length - 1]) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
};

console.log(isValid("(("));
