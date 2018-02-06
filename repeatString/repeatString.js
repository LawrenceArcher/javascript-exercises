var repeatString = function(str, num) {
	var returnStr = "";
	if (num <0 || num == NaN){
		return "ERROR";
	}else{
		for (var i = 0; i < num; i++){
			returnStr += str;
		}
		return returnStr;
	}
	
}

module.exports = repeatString
