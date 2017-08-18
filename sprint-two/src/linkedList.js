var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null && list.tail === null) {
      var newNode = new Node(value);
      list.head = newNode;
      list.tail = newNode;
    } else if (list.head === list.tail) {
      var newNode = new Node(value);
      list.head.next = newNode;
      list.tail = newNode;
    } else {
      var newNode = new Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    } 
  };

  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target) {
    if (list.tail.value === target) {
      return true;
    }

    var current = list.head
    while (current) {
      if (current.value === target) {
        return true;
        current = current.next;
      } else {
        return false;
      }
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
