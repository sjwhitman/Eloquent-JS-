function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
var centuries = {};
//assign each ancestor a century value: 
ancestry.forEach(function(person){
	person.century = Math.ceil((person.died)/100);

	if (person.century in centuries)
		centuries[person.century].push(person.died-person.born);
  	else 
    	centuries[person.century] = [];
  		centuries[person.century].push(person.died-person.born);
})
for(var prop in centuries){
	console.log((average(centuries[prop]).toFixed(1)));
}
  //Math.round(average(filtered) *10)/10
}
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
