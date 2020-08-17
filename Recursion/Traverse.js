function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left == null ? null : traverse(tree.left);
    tree.right = node.right == null ? null : traverse(tree.right);
    return tree;
}
