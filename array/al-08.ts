export function solution(s) {
  const stack: string[] = [];

  for (const c of s) {
    if (c === "(") {
      stack.push(c);
    } else if (c === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

console.log(solution("(())()"));
console.log(solution("((())()"));
