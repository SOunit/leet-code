const isValid = (s) => {};

// true
console.log(isValid("()"));
console.log(isValid("(){}[]"));
console.log(isValid("({[]}){}[]"));

// false
console.log(isValid("("));
console.log(isValid("((("));
console.log(isValid("({}]"));
