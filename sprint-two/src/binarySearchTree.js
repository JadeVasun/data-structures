var BinarySearchTree = function(value) {
	var searchTree = Object.create(searchTreeMethods);
		searchTree.left = null;
		searchTree.right = null;
		searchTree.value = value;

		return searchTree;
};

var searchTreeMethods = {};

searchTreeMethods.insert = function (value) {
	
	if (value < this.value && this.left !== null) {
		this.left.insert(value);
	} else if (value < this.value && this.left === null) {
		this.left = BinarySearchTree(value);
	} else if (value > this.value && this.right !== null) {
		this.right.insert(value);
	} else if (value > this.value && this.right === null) {
		this.right = BinarySearchTree(value);
	}
}

searchTreeMethods.contains = function (value) {
	if (value === this.value) {
		return true;
	} else if (value < this.value && this.left !== null) {
		return this.left.contains(value);
	} else if (value > this.value && this. right !== null) {
		return this.right.contains(value);
	}	
	return false; 	
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
