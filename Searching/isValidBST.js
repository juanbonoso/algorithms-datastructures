/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root){
        return true;
    }
    return breathFirstSearch(root);
};

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var isValidBST = function (treeNode) {
     if (!treeNode) {
    return true
  }
  const q = [{
    treeNode,
    upperBound: Number.POSITIVE_INFINITY,
    lowerBound: Number.NEGATIVE_INFINITY,
  }]
  while (q.length) {
    const {treeNode: {left, right, val}, upperBound, lowerBound} = q.shift()
    if (val >= upperBound || val <= lowerBound) {
      return false
    }
    const nextLowerBound = Math.max(val, lowerBound)
    const nextUpperBound = Math.min(val, upperBound)
    if (left) {
      q.push({treeNode: left, lowerBound, upperBound: nextUpperBound})
    }
    if (right) {
      q.push({treeNode: right, lowerBound: nextLowerBound, upperBound})
    }
  }
  return true
};