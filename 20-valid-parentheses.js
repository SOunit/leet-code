// https://betterprogramming.pub/stacks-in-javascript-d2f0e4404eac

const isValid = (s) => {
  const stack = [];
  const bracketsMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const bracket = stack.pop();
      if (bracket !== bracketsMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// true
console.log(isValid("()"));
console.log(isValid("(){}[]"));
console.log(isValid("({[]}){}[]"));

// false
console.log(isValid("("));
console.log(isValid("((("));
console.log(isValid("({}]"));
