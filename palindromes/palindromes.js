var palindromes = function(str) {
	var clean = str.replace(/\W/g, '').toLowerCase();
	console.log(clean);
	var arr = clean.split("");
	var reverseArr = [];
	var j = 0;
	for (var i = arr.length-1; i >= 0; i--){
		reverseArr[j]=arr[i];
		j++;
	}
	var reverseStr = reverseArr.join("");
	return reverseStr == clean? true:false;
}

module.exports = palindromes
