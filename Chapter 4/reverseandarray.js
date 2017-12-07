function reverseArray (inputArray){

	var oldArr = inputArray; 
	var newArr = [];
	var m = 0;
	for (var i = oldArr.length - 1; i >= 0; i--) {
		newArr[m] = oldArr[i];
		m++
	}

	return newArr; 

}

function reverseArrayInPlace (inputArray){

	if (inputArray.length % 2 == 0 && inputArray.length != 1){

		for (i = 0; i < inputArray.length / 2; i++){
			inputArray[i] = inputArray[inputArray.length - i];
		}

	}

	else {

		for (i = 0; i < (Math.floor(inputArray.length/2)); i++){
			
			var temp = inputArray[i];
			inputArray[i] = inputArray[inputArray.length - 1 - i];
			inputArray [inputArray.length - 1 - i] = temp;
		}
	}

	return inputArray; 

}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]