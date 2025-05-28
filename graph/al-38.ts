export function solution(graph, start) {
  const result = [];

  const adjList = {};
  const visited = new Set();

  graph.forEach(([u, v]) => {
    if (!adjList[u]) {
      adjList[u] = [];
    }

    adjList[u].push(v);
  });

  function dfs(node, visited, result) {
    visited.add(node);
    result.push(node);

    (adjList[node] || []).forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        dfs(neighbor, visited, result);
      }
    });
  }

  dfs(start, visited, result);

  return result;
}

console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
);
