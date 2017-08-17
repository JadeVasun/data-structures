var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var someInstance = Object.create(queueMethods);

	someInstance.front = 0;
	someInstance.back = 0;
	someInstance.storage = {};

	return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.back] = value;
	this.back += 1;
	};

queueMethods.dequeue = function() {
  if (this.back - this.front > 0) {
    var result = this.storage[this.front];
    delete this.storage[this.front];
    this.front +=1
    return result;
  }  
}

queueMethods.size = function() {
  return this.back-this.front;
};


