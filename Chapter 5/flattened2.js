var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array){
var flattened = array.reduce(function(a, b) {
  	return a.concat(b)
	});
return flattened; 
}

console.log(flatten(arrays)); 
// → [1, 2, 3, 4, 5, 6]