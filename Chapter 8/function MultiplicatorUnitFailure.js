function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
	return a * b; 
}
try{
console.log(primitiveMultiply(8,8));
}

catch (e) {
  if (e instanceof MultiplicatorUnitFailure)
    console.log("Failiure of the multiplicator unit.");
  else
    throw e; 
 }

console.log(reliableMultiply(8, 8));
// → 64