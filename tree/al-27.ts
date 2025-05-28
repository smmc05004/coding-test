export class Node<T> {
  left;
  right;
  val: T;

  constructor(key: T) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

export class BST<T> {
  root;

  insert(key: T) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let curr = this.root;
      while (true) {
        if (key < curr.val) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(key);
            break;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let curr = this.root;
    while (curr && curr.val !== key) {
      if (key < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return curr;
  }
}

export function solution(list, searchList) {
  const bst = new BST();
  for (const key of list) {
    bst.insert(key);
  }

  const result: boolean[] = [];

  for (const serarchVal of searchList) {
    if (bst.search(serarchVal)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
