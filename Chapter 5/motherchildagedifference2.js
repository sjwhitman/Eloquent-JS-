function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var unfiltered = ancestry.map(function(person){
	if(byName[person.mother]){
		var mName = byName[person.mother];
      	return person.born - mName.born; 
	}
});

var filtered = unfiltered.filter(function(diff){
	if (diff)
		return diff; 
})

console.log(Math.round(average(filtered) *10)/10); 

// → 31.2