function solution(s) {
  const stack: string[] = [];

  for (const c of s) {
    if (stack.length !== 0 && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  const result = stack.length === 0 ? 1 : 0;
  return result;
}

solution("baabaa");
solution("cdcd");
