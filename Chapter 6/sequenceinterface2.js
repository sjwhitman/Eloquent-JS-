function ArraySeq(array) {
  this.array = array;
  this.counter = 0;
}
function RangeSeq(min,max) {
  	this.counter = 0;
    this.array = new Array(max - min); 
  	for(i = 0; i < 5; i++){
    this.array[i] = min + i; 
    }
}
ArraySeq.prototype.next = function() {
  console.log(this.array[this.counter]);
  this.counter++;
};
ArraySeq.prototype.termination = function() {
 var arr = this.array; 
 if (arr.length == this.counter) 
  return false;
 else 
   return true; 
};
RangeSeq.prototype.next = function() {
  console.log(this.array[this.counter]);
  this.counter++;
};
RangeSeq.prototype.termination = function() {
 var arr = this.array; 
 if (arr.length == this.counter || this.counter >= 5) 
  return false;
 else 
   return true; 
};

function logFive(arrOb) {
	while(arrOb.termination()){
    	arrOb.next(); 
    }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104