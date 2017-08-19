

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._newArray = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
  //key value pair into a bucket
  // var bucket = this._storage.get(index);
  // if (!bucket) {
  // 	bucket = [];
  // 	bucket.push([k,v]);
  // 	this._storage.set(index, bucket);
  // } 

  // if (bucket) {
  // 	for (var i = 0; i < bucket.length; i++) {
  // 		if (bucket[i][0] === k) {
  // 			bucket[i][1] === v;
  // 			return;
  // 		}
  // 	}
  // }
  // bucket.push([k,v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
   return this._storage.get(index);
  }

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


