// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {
//  CODE INSIDE HERE   //
var arr2 = [];
//for loop
for (var i = 0; i < arr.length; i++) {

	//store values of callback in new array??
	 arr2[i] = callback(arr[i],i,arr);
}
return arr2;
}

/*JSConsole test code
nums = [1,2,3,4];
function add1(nums) {
	console.log(nums + 1);
}
Pass in (nums, add1); to test myMap

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
