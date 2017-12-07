function rangeOfNumbers (startNum,endNum) {
//take start num, loop with num++ to populate Array
	var numArray = [];

	numArray[0] = startNum;

	for (i = 0; i < (endNum - startNum) + 1; i++) {

	numArray[i] = startNum + i;

}

return numArray;

}

function sumOfRange (startNum,endNum) {

	var numSum = 0;
	var numArray = rangeOfNumbers(startNum,endNum);
	for (i = 0; i < endNum; i++) {

		numSum += numArray[i];
	}

return numSum; 

}

newArray = rangeOfNumbers(1,3);
console.log(newArray)
// prints [1, 2, 3]
sumOne = sumOfRange (1,3);
console.log(sumOne);
// prints NaN