// 전위 순회
export function preorder(nodes, idx) {
  if (idx >= nodes.length) return "";

  let ret = `${nodes[idx]} `;
  ret += preorder(nodes, 2 * idx + 1);
  ret += preorder(nodes, 2 * idx + 2);

  return ret;
}
// 중위 순회
export function inorder(nodes, idx) {
  if (idx >= nodes.length) return "";

  let ret = inorder(nodes, 2 * idx + 1);
  ret += `${nodes[idx]} `;
  ret += inorder(nodes, 2 * idx + 2);

  return ret;
}
// 후위 순회
export function postorder(nodes, idx) {
  if (idx >= nodes.length) return "";

  let ret = postorder(nodes, 2 * idx + 1);
  ret += postorder(nodes, 2 * idx + 2);
  ret += `${nodes[idx]} `;

  return ret;
}

export function solution(nodes) {
  return [
    preorder(nodes, 0).slice(0, -1),
    inorder(nodes, 0).slice(0, -1),
    postorder(nodes, 0).slice(0, -1),
  ];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
