var fibonacci = function(num) {
	if (num<0){
		return "OOPS";
	}
	var arr = [0, 0];
	var nextNum = 0;
	for (var i = 0; i<num;i++){
		if (i ==0){
			nextNum = 1;
		}else{
			nextNum = arr[0] + arr[1];
		}
		arr.shift();
		arr.push(nextNum);
	}
	return arr[1];
}

module.exports = fibonacci
//shift first element then push new element.
//return 3rd element of array