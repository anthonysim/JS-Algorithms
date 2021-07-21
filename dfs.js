const dfs = function(root) {
    let results = [];
  
    function traverse(node) {
        results.push(node.val)
      
        if (node.left) {
            traverse(node.left);
        }
        if (node.right) {
            traverse(node.right);
        }
    }   



function bfsdfsval, left, right) {
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
