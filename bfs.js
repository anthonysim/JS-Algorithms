var averageOfLevels = function(root) {
    const arr = [root]
    const results = []
    
    while (arr.length) {
      const node = arr.shift();
      results.push(node.val);
      
      if (node.left) {
        arr.push(node.left);
      };
      if (node.right) {
        arr.push(node.right)
      };
    }   
    return results;
};



function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

let tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

console.log(averageOfLevels(tree)) // [ 3, 9, 20, 15, 7 ]
